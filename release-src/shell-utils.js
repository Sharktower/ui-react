/* eslint-disable import/no-extraneous-dependencies, no-console */

const shell = require('shelljs');
const chalk = require('chalk');

/*
    exampleOptions = {
        bg: 'bgRed',
        flags: '-n',
        iconLeft: '🚀',
        iconRight: '',
    }
*/

function userMessage(text, colour, options) {
    const messageOptions = options || {};
    const message = chalk[messageOptions.bg || 'reset'][colour](text);
    shell.echo(messageOptions.flags || '', `${messageOptions.iconLeft || ''}  ${message}  ${messageOptions.iconRight || ''}`.trim());
}

const executeSilently = { silent: true };

module.exports = {
    userMessage,
    executeSilently,
};
