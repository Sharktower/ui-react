/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const executeSilently = require('./execute-silently');

function bumpNpmVersion(versionPart) {
    return shell.exec(`npm version ${versionPart} -m "release version %s"`, executeSilently).stdout.trim();
}

module.exports = { bumpNpmVersion };
