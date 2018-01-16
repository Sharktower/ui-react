/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const { executeSilently } = require('./shell-utils');

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

function moveTagToHead() {
    const tag = process.env.npm_package_version;
    shell.exec(
        `git tag --force --annotate ${tag} -m "release version ${tag}" HEAD`,
        executeSilently,
    );
}

module.exports = {
    getCurrentBranch,
    createBranch,
    deleteLocalBranch,
    checkoutBranch,
    pushBranch,
    pushTag,
    moveTagToHead,
};
