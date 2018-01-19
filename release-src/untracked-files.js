/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const { executeSilently } = require('./shell-utils');

function hasUntrackedFiles() {
    return shell.exec('git diff-index --quiet HEAD --', executeSilently).code;
}

module.exports = { hasUntrackedFiles };
