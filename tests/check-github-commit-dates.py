#!/usr/bin/env python3

""" A script to find github repo links and last commit dates in a markdown file

Requirements:
 - python3 github module (sudo apt install python3-github on Debian)
 - A personal access token (https://github.com/settings/tokens)

Usage:
 - Run awesome_bot --allow-redirect -f README.md beforehand to detect any error(4xx, 5xx) that would
   cause the script to abort
 - Github API calls are limited to 5000 requests/hour https://developer.github.com/v3/#rate-limiting
 - Put the token in your environment variables:
   export GITHUB_TOKEN=18c45f8d8d556492d1d877998a5b311b368a76e4
 - The output is unsorted, just pipe it through 'sort' or paste it in your editor and sort from there
 - Put the script in your crontab or run it from time to time. It doesn't make sense to add this
   script to the CI job that runs every time something is pushed.
 - To detect no-commit related activity (repo metadata changes, wiki edits, ...), replace pushed_at
   with updated_at

"""

from github import Github
import sys
import time
import re
import os

__author__ = "nodiscc"
__copyright__ = "Copyright 2019, nodiscc"
__credits__ = ["https://github.com/awesome-selfhosted/awesome-selfhosted"]
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "nodiscc"
__email__ = "nodiscc@gmail.com"
__status__ = "Production"

###############################################################################

access_token = os.environ['GITHUB_TOKEN']

""" find all URLs of the form https://github.com/owner/repo """
with open('README.md', 'r') as readme:
    data = readme.read()
    project_urls = re.findall('https://github.com/[A-z]*/[A-z|0-9|\-|_|\.]+', data)

urls = sorted(set(project_urls))

""" Uncomment this to debug the list of matched URLs """
# print(str(urls))
# exit(0)

""" login to github API """
g = Github(access_token)

""" load project metadata, output last commit date and URL """
for url in urls:
    project = re.sub('https://github.com/', '', url)
    repo = g.get_repo(project)
    print(str(repo.pushed_at) + ' https://github.com/' + project)
