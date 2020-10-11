#!/usr/bin/make -f
SHELL = /bin/bash
AWESOME_BOT_OPTIONS = --allow-redirect --skip-save-results --allow 202 --white-list airsonic.github.io/docs/apps

all: check_all

# run all checks
check_all: check_syntax_full awesome_bot check_github_commit_dates

# check pull requests
check_pr: check_syntax_diff

# check syntax in whole file
check_syntax_full:
	node tests/test.js -r README.md

# check syntax in the diff from master to current branch
check_syntax_diff:
	git diff origin/master -U0 README.md | grep --perl-regexp --only-matching "(?<=^\+).*" >> temp.md && \
	node tests/test.js -r README.md -d temp.md && \
	awesome_bot -f temp.md $(AWESOME_BOT_OPTIONS)

# check dead links
# https://github.com/dkhamsing/awesome_bot
awesome_bot:
	awesome_bot -f README.md $(AWESOME_BOT_OPTIONS)

# check date of last commit for github.com repository URLs
check_github_commit_dates:
	pip3 install PyGithub
	python3 tests/check-github-commit-dates.py

#################################

# update the AUTHORS.md file
contrib:
	@mv .github/.mailmap . && printf "|Commits | Author |\n| :---: | --- |\n" > AUTHORS.md && git shortlog -sne | sed -r 's/^\s*([[:digit:]]*?)\s*?(.*?)/|\1|\2|/' >> AUTHORS.md && mv .mailmap .github/.mailmap

# add a new entry
add:
	@read -r -p "Software name: " Name && [[ ! -z "$$Name" ]] && \
	read -r -p "Homepage/URL: " Url && [[ ! -z "$$Url" ]] && \
	read -r -p "Description (max 250 characters, ending with .): " Description && [[ ! -z "$$Description" ]] && \
	read -r -p "License: " License && [[ ! -z "$$License" ]] && \
	read -r -p "Main server-side language/platform/requirement: " Language && [[ ! -z "$$Language" ]] && \
	read -r -p "Demo URL (optional,leave empty): " Demo && \
	if [[ "$$Demo" == "" ]]; then CDemo=""; else CDemo="[Demo]($$Demo)"; fi; \
	read -r -p "Source code URL (if different from homepage): " Source && \
	if [[ "$$Source" == "" ]]; then CSource=""; else CSource="[Source Code]($$Source)"; fi; \
	if [[ "$$CSource" == "" && "$$Demo" == "" ]]; then Moreinfo=""; else Moreinfo="($$CDemo $$CSource)"; fi; \
	echo "Copy this entry to your clipboard, paste it in the appropriate category:" ;\
	echo "- [$$Name]($$Url) - $${Description} $${Moreinfo} \`$$License\` \`$$Language\`"
