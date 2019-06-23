#!/usr/bin/make -f
SHELL = /bin/bash
all: checks

checks: nolicenselanguage nofullstop longdescriptions syntaxerrors

monthly: checks awesome_bot check_github_commit_dates contrib

noexternallink:
	@echo -e "\nLines with no source/demo/other link:"
	@sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep '^ *\* ' | egrep --color=always '[a-z\.] `'

nolicenselanguage:
	@echo -e "\nLines with only 1 or no language/license entry:"
	@! sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep '^ *\* ' | egrep -v '` `'

nofullstop:
	@echo -e "\nLines without a full stop after description:"
	@! sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep '[a-z] \(\['
	@! sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep '[a-z] `'

longdescriptions:
	@echo -e "\nDescriptions exceeding 250 chars:"
	@! sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep --only-matching '\) - [Aa-Zz|.|\(|\)|/| |,|-]*\s\(\[' README.md | grep  '.\{257\}'

syntaxerrors:
	@echo -e "\nSyntax errors:" 
	@! sed -n -e '/BEGIN SOFTWARE LIST/,/END SOFTWARE LIST/ p' README.md | egrep  '\)\(|``|\)`'

#################################

contrib:
	@mv .github/.mailmap . && printf "|Commits | Author |\n| :---: | --- |\n" > AUTHORS.md && git shortlog -sne | sed -r 's/^\s*([[:digit:]]*?)\s*?(.*?)/|\1|\2|/' >> AUTHORS.md && mv .mailmap .github/.mailmap

awesome_bot:
	# https://github.com/dkhamsing/awesome_bot
	awesome_bot --allow-redirect -f README.md

check_github_commit_dates:
	python3 tests/check-github-commit-dates.py

#################################


add:
	@#add a new entry
	@printf 'Software name: ' ;\
	read Name; if [ -z "$$Name" ]; then printf 'Missing software name!\n'; exit 1 ; fi ;\
	printf 'Homepage URL: ' ;\
	read Url; if [ -z "$$Url" ]; then printf 'Missing main project URL!\n'; exit 1 ; fi ;\
	printf 'Description (max 250 characters, ending with .): ' ;\
	read Description; if [ -z "$$Description" ]; then printf 'Missing description!\n'; exit 1 ; fi ;\
	printf 'License: ' ;\
	read License; if [ -z "$$License" ]; then printf 'Missing license!\n'; exit 1 ; fi ;\
	printf 'Main server-side language/platform/requirement: ' ;\
	read Language; if [ -z "$$Language" ]; then printf 'Missing language!\n'; exit 1 ; fi ;\
	printf 'Demo URL (if any): ' ;\
	read Demo; if [ -z "$$Demo" ]; then CDemo="" ; else CDemo="[Demo]($$Demo)" ; fi ;\
	printf 'Source code URL (if different from Homepage): ' ;\
	read Source; if [ -z "$$Source" ]; then CSource="" ; else CSource="[Source Code]($$Source)" ; fi ;\
	if [[ "$$CSource" == "" && "$$Demo" == "" ]]; \
	then Moreinfo=""; \
	else Moreinfo=$$(echo "($$CDemo$$CSource)" | sed 's|)\[|), [|g') ;\
	fi ;\
	echo -e "Copy this entry to your clipboard, paste it in the appropriate category:\n\n" ;\
	echo "- [$$Name]($$Url) - $${Description} $${Moreinfo} \`$$License\` \`$$Language\`"


#TODO ask for category and insert item accordingly
#TODO check for unsorted entries
#TODO automatically sort entries/sections
#TODO autoupdate contributors list
