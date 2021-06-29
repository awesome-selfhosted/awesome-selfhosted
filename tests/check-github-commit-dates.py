#!/usr/bin/env python3

""" A script to find github repo links and last commit dates in a markdown file

Requirements:
 - python3 github module (sudo apt install python3-github on Debian)
 - A personal access token (https://github.com/settings/tokens)

Usage:
 - Github graphql API calls are limited to 5000 points/hour https://docs.github.com/en/graphql/overview/resource-limitations
 - Put the token in your environment variables:
   export GITHUB_TOKEN=18c45f8d8d556492d1d877998a5b311b368a76e4
 - The output is sorted oldest to newest
 - Put the script in your crontab or run it from time to time. It doesn't make sense to add this
   script to the CI job that runs every time something is pushed.
 - To detect no-commit related activity (repo metadata changes, wiki edits, ...), replace pushed_at
   with updated_at

"""

import json
import sys
import re
import os
import logging
import requests
from requests.adapters import HTTPAdapter
from requests.exceptions import ConnectionError
from datetime import *

__author__ = "nodiscc"
__copyright__ = "Copyright 2019, nodiscc"
__credits__ = ["https://github.com/awesome-selfhosted/awesome-selfhosted"]
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "nodiscc"
__email__ = "nodiscc@gmail.com"
__status__ = "Production"

###############################################################################
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s', datefmt='%d-%b-%y %H:%M:%S')

""" function to query Github graphql API """
def query_github_api(query, variables):
    access_token = os.environ['GITHUB_TOKEN']
    headers = {"Authorization": "Bearer " + access_token}
    github_adapter = HTTPAdapter(max_retries=7)
    session = requests.Session()
    session.mount('https:api.github.com/graphql', github_adapter)
    try:
        logging.info('Querying API for %s', variables)
        response = session.post('https://api.github.com/graphql', timeout=(10) , json={'query': query, 'variables': variables}, headers=headers)
        response.raise_for_status()
        logging.debug(response.json())
        return response.json()
    except requests.exceptions.HTTPError as errh:
        logging.error("An Http Error occurred:" + repr(errh))
        return {'errors': [{'type': 'HTTP Error'}]}
    except requests.exceptions.ConnectionError as errc:
        logging.error("An Error Connecting to the API occurred:" + repr(errc))
        return {"errors": [ { "type": "Connect Error"}]}
    except requests.exceptions.Timeout as errt:
        logging.error("A Timeout Error occurred:" + repr(errt))
        return {"errors": [ { "type": "Timeout Error"}]}
    except requests.exceptions.RequestException as err:
        logging.error("An Unknown Error occurred" + repr(err))
        return {"errors": [ { "type": "Request Exception"}]}

""" function to add commas for prettier output"""
def add_comma(s):
    if s != '':
        s = ', ' + s
        return s
    else:
        return s

output = []

""" find all URLs of the form https://github.com/owner/repo """
def parse_github_projects():
    with open(sys.argv[1], 'r') as readme:
        logging.info('Testing ' + sys.argv[1])
        data = readme.read()
        #project_urls = re.findall('https://github\.com/.*', data)
        project_urls = re.findall('https://github\.com/([a-zA-Z\d\-\._]{1,39}/[a-zA-Z\d\-\._]{1,39})(?=\)|/|#\s)', data)
        logging.info('Checking ' + str(len(project_urls)) + ' github repos.')
    return sorted(set(project_urls))

urls = parse_github_projects()

""" function to check remaining rate limit """
def check_github_remaining_limit(): 
    query = '''
    query{
            viewer { 
                login
            }
            rateLimit {
                cost
                remaining
                resetAt
            }
    }'''
    logging.info("Checking github api remaining rate limit.")
    result = query_github_api(query, '')
    if 'errors' in result:
        logging.error(result["errors"][0]["type"] + ", " + result["errors"][0]["message"])
        with open('github_commit_dates.md', 'w') as filehandle:
            filehandle.write('%s\n' % '--------------------\n### Github commit date checks')  
            filehandle.write(result["errors"][0]["type"] + ", " + result["errors"][0]["message"])
    else:
        if result["data"]["rateLimit"]["remaining"] < len(urls):
            logging.error('Github api calls remaining is insufficient, exiting.')
            logging.error('URLS: ' + str(len(urls)) + ', api calls remaining: ' + str(result["data"]["rateLimit"]["remaining"]) + ', Resets at: ' + str(result["data"]["rateLimit"]["resetAt"]))
            with open('github_commit_dates.md', 'w') as filehandle:
                filehandle.write('%s\n' % '--------------------\n### Github commit date checks')  
                filehandle.write('Github api calls remaining is insufficient, exiting.\n')
                filehandle.write('URLS: ' + str(len(urls)) + ', api calls remaining: ' + str(result["data"]["rateLimit"]["remaining"]) + ', Resets at: ' + str(result["data"]["rateLimit"]["resetAt"]) + '\n')
            sys.exit(1)

""" Uncomment this to debug the list of matched URLs """
# print(str(urls))
# print(len(urls))
# with open('links.txt', 'w') as filehandle:
#     for l in urls:
#         filehandle.write('%s\n' % l)

# exit(0)

check_github_remaining_limit()
i = 0
""" load project metadata, output last commit date and URL """
for url in urls:
    split = url.split("/")
    variables = {
        "owner": split[0],
        "name": split[1]
    }
    query = '''
    query($owner: String!, $name: String!){
            repository(owner:$owner, name:$name) {
            pushedAt
            updatedAt
            isArchived
            isDisabled
            nameWithOwner
            }
            rateLimit {
                cost
                remaining
                resetAt
            }
    }'''

    github_graphql_data = query_github_api(query, variables)
    if 'errors' in github_graphql_data:
        logging.info(github_graphql_data["errors"][0]["type"])
        output.append([date(1900, 1, 1),'https://github.com/'+url, github_graphql_data["errors"][0]["type"]])
    else:
        has_issue = False
        note = ''
        if github_graphql_data["data"]["repository"]["isArchived"] == True:
            has_issue = True
            note = 'Archived'
        if github_graphql_data["data"]["repository"]["isDisabled"] == True:
            if note == '':
                has_issue = True
                note = 'Disabled'
            else:
                note = note + ', Disabled'
        if github_graphql_data["data"]["repository"]["nameWithOwner"] != url:
            if note == '':
                has_issue = True
                note = 'Moved to https://github.com/'+ github_graphql_data["data"]["repository"]["nameWithOwner"]
            else:
                note = note + ', Moved to https://github.com/'+ github_graphql_data["data"]["repository"]["nameWithOwner"]
        project_pushed_at = datetime.strptime(github_graphql_data["data"]["repository"]["pushedAt"], '%Y-%m-%dT%H:%M:%SZ').date()
        if project_pushed_at < (date.today() - timedelta(days = 365)):
            has_issue = True
        if has_issue:
            output.append([project_pushed_at, 'https://github.com/'+url, note])
            logging.info(str(project_pushed_at)+' | https://github.com/'+url+' | '+note)
            i += 1


if i > 0:
    sorted_list = sorted(output, key=lambda x: x[0])
    with open('github_commit_dates.md', 'w') as filehandle:
        filehandle.write('%s\n' % '--------------------\n### Github commit date checks')        
        filehandle.write('%s\n' % '#### There were %s repos last updated over 1 year ago.' % str(i))
        for l in sorted_list:
            filehandle.write('* [ ] %s, %s%s \n' % (str(l[0]), l[1], add_comma(l[2])))
    sys.exit(0)
else:
    with open('github_commit_dates.md', 'w') as filehandle:
        filehandle.write('%s\n' % '--------------------\n### Github commit date checks')        
        filehandle.write('%s\n' % '#### There were no repos last updated over 1 year ago.')

