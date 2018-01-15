#!/bin/bash

## convert this template to the live release script with:
##    argbash -o release release.m4

# m4_ignore(
echo "This is just a script template, not the script (yet) - pass it to 'argbash' to fix this." >&2
exit 11  #)Created by argbash-init v2.5.1
# ARG_POSITIONAL_SINGLE([version-part], [major|minor|patch])
# ARG_HELP([Utility script to release UI React])
# ARG_VERSION([echo $0 v1.0.0])
# ARGBASH_GO

# [ <-- needed because of Argbash

printf "Value of '%s': %s\n" 'version' "$_arg_version_part"


reset=`tput sgr0`
yellow=`tput setaf 3`
purple=`tput setaf 93`
red_bg=`tput setab 1`

## STOP IF UNTRACKED FILES ARE FOUND!
if ! git diff-index --quiet HEAD --
then
    echo "${red_bg}You have untracked files! Cancelling release!${reset}"
    exit
fi

echo "${purple}Releasing UI React${reset} 🚀 "

current_branch=$(git rev-parse --abbrev-ref HEAD)
release_branch=release--`date +%Y-%m-%d`
git_log_commit_hashes=$(git log --grep="Merge pull request" --max-count 10 --format=%H)
latest_pr_hash=${git_log_commit_hashes:0:40}
pr_title=$(git show --format=%b $latest_pr_hash)
pr_body="" ## @TODO: get pull request comment from github api?

echo "${yellow}Create release branch from master...${reset}"
git checkout master
git checkout -b $release_branch

echo "${yellow}Bump NPM version...${reset}"
npm version $_arg_version_part

echo "${yellow}Writing changelog...${reset}"
echo pr_title >> CHANGELOG.md
echo pr_body >> CHANGELOG.md
git commit -m "update changelog"

echo "${yellow}Push branch and tags...${reset}"

git push -u origin $release_branch
git push origin <tag_name>

## @TODO: get most recent tag from git

echo "${yellow}Create and merge pull request...${reset}"

## @TODO: create and merge pull request via github api

echo "${yellow}Checkout original branch ($current_branch)...${reset}"
git checkout $current_branch

echo "${yellow}Delete release branch...${reset}"
git branch -d $release_branch

# ] <-- needed because of Argbash
