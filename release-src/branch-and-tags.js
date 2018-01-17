/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const { executeSilently } = require('./shell-utils');
const { githubRestApi } = require('./github-client');
const githubVariables = require('./github-variables');

function getCurrentBranch() {
    return shell.exec('git rev-parse --abbrev-ref HEAD', executeSilently).stdout.trim();
}

function checkoutBranch(branch, newBranch) {
    const newBranchFlag = newBranch ? '-b' : '';
    shell.exec(`git checkout ${newBranchFlag} ${branch}`, executeSilently);
}

function createBranch(branch) {
    checkoutBranch('master');
    shell.exec('git pull', executeSilently);
    checkoutBranch(branch, true);
}

function deleteLocalBranch(branch) {
    shell.exec(`git branch -D ${branch}`, executeSilently);
}

function pushBranch(branch) {
    shell.exec(`git push --set-upstream origin ${branch}`, executeSilently);
}

function pushTag(tag) {
    shell.exec(`git push origin ${tag}`, executeSilently);
}

function moveTagToHead(tag) {
    shell.exec(
        `git tag --force --annotate ${tag} -m "release version ${tag}" HEAD`,
        executeSilently,
    );
}

function addReleaseNotesToTag(tag, releaseNotes) {
    githubRestApi.repos.getReleaseByTag({
        owner: githubVariables.owner,
        repo: githubVariables.repo,
        tag,
    }).then((release) => {
        githubRestApi.repos.editRelease({
            owner: githubVariables.owner,
            repo: githubVariables.repo,
            id: release.data.id,
            tag_name: tag,
            name: `Release ${tag}`,
            body: releaseNotes,
        }).error((error) => {
            console.log(error);
        });
    }).error((error) => {
        console.log(error);
    });
}

module.exports = {
    getCurrentBranch,
    createBranch,
    deleteLocalBranch,
    checkoutBranch,
    pushBranch,
    pushTag,
    moveTagToHead,
    addReleaseNotesToTag,
};
