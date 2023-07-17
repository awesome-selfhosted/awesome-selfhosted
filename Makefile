#!/usr/bin/make -f
SHELL = /bin/bash
# update the AUTHORS file
contrib:
	@mv .github/.mailmap . && printf "Commits|Author\n-------|---------------------------------------------------\n" > AUTHORS && git shortlog -sne >> AUTHORS && mv .mailmap .github/.mailmap
