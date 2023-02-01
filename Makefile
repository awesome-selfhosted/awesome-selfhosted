#!/usr/bin/make -f
SHELL = /bin/bash
# update the AUTHORS.md file
contrib:
	@mv .github/.mailmap . && printf "|Commits | Author |\n| :---: | --- |\n" > AUTHORS.md && git shortlog -sne | sed -r 's/^\s*([[:digit:]]*?)\s*?(.*?)/|\1|\2|/' >> AUTHORS.md && mv .mailmap .github/.mailmap
