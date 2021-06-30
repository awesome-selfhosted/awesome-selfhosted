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

import math
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

""" find all URLs of the form https://github.com/owner/repo """
def parse_github_projects():
    with open(sys.argv[1], 'r') as readme:
        logging.info('Testing ' + sys.argv[1])
        data = readme.read()
        project_urls = re.findall('https://github\.com/([a-zA-Z\d\-\._]{1,39}/[a-zA-Z\d\-\._]{1,39})(?=\)|/|#\s)', data)
    """ Uncomment this to debug the list of matched URLs """
    # print(str(project_urls))
    # print(len(project_urls))
    # with open('links.txt', 'w') as filehandle:
    #     for l in project_urls:
    #         filehandle.write('%s\n' % l)

    # exit(0)
    sorted_urls = sorted(set(project_urls))
    logging.info('Checking ' + str(len(sorted_urls)) + ' github repos.')
    return sorted_urls


""" function to query Github graphql API """
def query_github_api(query):
    access_token = os.environ['GITHUB_TOKEN']
    headers = {"Authorization": "Bearer " + access_token}
    github_adapter = HTTPAdapter(max_retries=7)
    session = requests.Session()
    session.mount('https:api.github.com/graphql', github_adapter)
    try:
        response = session.post('https://api.github.com/graphql', timeout=(10) , json={'query': query}, headers=headers)
        response.raise_for_status()
        #logging.debug(response.json())
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

""" function to check remaining rate limit """
def check_github_remaining_limit(urls, project_per_call): 
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
    result = query_github_api(query)
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
                filehandle.write('URLS: ' + str(len(urls)) + str(math.ceil(len(urls) / project_per_call)) + ', Github API cost: ' + ', api calls remaining: ' + str(result["data"]["rateLimit"]["remaining"]) + ', Resets at: ' + str(result["data"]["rateLimit"]["resetAt"]) + '\n')
            sys.exit(1)

def parse_api_output(github_graphql_data, url_store):
    output = []
    if "errors" in github_graphql_data:
        for e in github_graphql_data["errors"]:
            print(e)
            logging.info('https://github.com/'+ url_store[e["path"][0]] + ", " + e["type"])
            output.append([date(1900, 1, 1),'https://github.com/'+ url_store[e["path"][0]], e["type"]])
    if "data" in github_graphql_data:
        for g, v in github_graphql_data["data"].items():
            if github_graphql_data["data"][g] == None:
                continue
            elif g == 'rateLimit':
                logging.info('Remaining Ratelimit: ' + str(github_graphql_data["data"][g]["remaining"]) + ' Cost: ' + str(github_graphql_data["data"][g]["cost"]))
            else:
                has_issue = False
                note = ''
                if github_graphql_data["data"][g]["isArchived"] == True:
                    has_issue = True
                    note = 'Archived'
                if github_graphql_data["data"][g]["isDisabled"] == True:
                    if note == '':
                        has_issue = True
                        note = 'Disabled'
                    else:
                        note = note + ', Disabled'
                if github_graphql_data["data"][g]["nameWithOwner"] != url_store[g]:
                    if note == '':
                        has_issue = True
                        note = 'Moved to https://github.com/'+ github_graphql_data["data"][g]["nameWithOwner"]
                    else:
                        note = note + ', Moved to https://github.com/'+ github_graphql_data["data"][g]["nameWithOwner"]
                project_pushed_at = datetime.strptime(github_graphql_data["data"][g]["pushedAt"], '%Y-%m-%dT%H:%M:%SZ').date()
                if project_pushed_at < (date.today() - timedelta(days = 365)):
                    has_issue = True
                if has_issue:
                    output.append([project_pushed_at, 'https://github.com/'+url_store[g], note])
                    logging.info(str(project_pushed_at)+' | https://github.com/'+url_store[g]+' | '+note)
    return output

def github_api_alias(url):
    replace = ["-", "/", "."]
    for s in replace:
        url = url.replace(s, "_")
    return "_" + url 

def build_query(urls, project_per_call):
    i = 0
    output = []
    query_param = '{pushedAt updatedAt isArchived isDisabled nameWithOwner}'
    url_store = {}    
    while (i < len(urls)):
        query_repo_count = 0
        query = "query{rateLimit{cost remaining resetAt}"
        while (query_repo_count < project_per_call and i < len(urls)):
            key = github_api_alias(urls[i])
            url_store[key] = urls[i]
            split = urls[i].split("/")
            query += key + ':' + 'repository(owner:"' + split[0] + '" name:"' + split[1] + '")' + query_param
            query_repo_count += 1
            i += 1
        query += "}"
        output.extend(parse_api_output(query_github_api(query), url_store))
    logging.debug('Total: ' + str(len(urls)) + ' Checked: ' + str(len(url_store)))
    return output

def main():
    project_per_call = 100
    urls = parse_github_projects()
    check_github_remaining_limit(urls, project_per_call)
    output = build_query(urls, project_per_call)
    if len(output) > 0:
        sorted_list = sorted(output, key=lambda x: x[0])
        with open('github_commit_dates.md', 'w') as filehandle:
            filehandle.write('%s\n' % '--------------------\n### Github commit date checks')        
            filehandle.write('%s\n' % '#### There were %s repos with issues.' % str(len(output)))
            for l in sorted_list:
                filehandle.write('* [ ] %s, %s%s \n' % (str(l[0]), l[1], add_comma(l[2])))
        sys.exit(1)
    else:
        with open('github_commit_dates.md', 'w') as filehandle:
            filehandle.write('%s\n' % '--------------------\n### Github commit date checks')        
            filehandle.write('%s\n' % '#### There were no repos with issues.')
        exit(0)

main()
