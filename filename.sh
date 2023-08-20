#!/bin/bash
# test if the received value matches kebab-case
VALID_TYPES="enum|model|service|component|directive|pipe|guard|resolver|interface|module"

if [[ $1 =~ ^([a-z]*[/\\]?[\-[a-z]+]*)+\.($VALID_TYPES)\.ts|html|scss|spec\.ts$ ]]; then
    exit 0
else
    exit 1
fi
