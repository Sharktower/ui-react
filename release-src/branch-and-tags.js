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

function pullLatest() {
    shell.exec('git pull', executeSilently);
}

function createBranch(branch) {
    checkoutBranch('master');
    pullLatest();
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

function createGitHubRelease(tag, releaseNotes) {
    return githubRestApi.repos.createRelease({
        owner: githubVariables.owner,
        repo: githubVariables.repo,
        tag_name: tag,
        name: tag,
        body: releaseNotes,
    });
}

module.exports = {
    getCurrentBranch,
    pullLatest,
    createBranch,
    deleteLocalBranch,
    checkoutBranch,
    pushBranch,
    pushTag,
    moveTagToHead,
    createGitHubRelease,
};
