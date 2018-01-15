/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const executeSilently = require('./execute-silently');

function getCurrentBranch() {
    return shell.exec('git rev-parse --abbrev-ref HEAD', executeSilently).stdout.trim();
}

function checkoutBranch(branch, newBranch) {
    const newBranchFlag = newBranch ? '-b' : '';
    shell.exec(`git checkout ${newBranchFlag} ${branch}`, executeSilently);
}

function createBranch(branch) {
    shell.exec('git checkout master', executeSilently);
    shell.exec('git pull', executeSilently);
    checkoutBranch(branch, true);
}

function deleteBranch(branch) {
    shell.exec(`git push -d origin ${branch}`, executeSilently);
    shell.exec(`git branch -D ${branch}`, executeSilently);
}

function pushBranch(branch) {
    shell.exec(`git push -u origin ${branch}`, executeSilently);
}

function pushTag(tag) {
    shell.exec(`git push origin ${tag}`, executeSilently);
}

module.exports = {
    getCurrentBranch,
    createBranch,
    deleteBranch,
    checkoutBranch,
    pushBranch,
    pushTag,
};
