/* eslint-disable import/no-extraneous-dependencies, no-console */
const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const shell = require('shelljs');
const { executeSilently } = require('./shell-utils');
const { releaseRequestLabel } = require('./pull-requests');

const changeLogDateFormat = 'YYYY-MM-DD';

function formatLastUpdatedDate(dateString) {
    const lastUpdatedDateFormat = '<!-- Last Updated: %s -->';
    return lastUpdatedDateFormat.replace('%s', dateString);
}

function stripComments(string) {
    return string.replace(/<!--.*-->/g, '');
}

function getChangelogLastUpdateDate(changelogBuffer) {
    const lastUpdatedDateRegExp = new RegExp(formatLastUpdatedDate('(\\d{4}-\\d{2}-\\d{2})'));
    const lastUpdatedDateString = changelogBuffer.slice(0, 33).toString()
        .replace(lastUpdatedDateRegExp, '$1');
    const lastUpdatedDate = moment(lastUpdatedDateString, changeLogDateFormat);
    return lastUpdatedDate.isValid() ? lastUpdatedDate : moment().subtract(1, 'months');
}

function filterPullRequests(graphPullRequests, changelogLastUpdateDate) {
    let pullRequests = graphPullRequests;
    pullRequests = pullRequests.filter((pr) => {
        const hiddenFromChangelog = pr.labels.nodes
            .filter(label => (
                label.name === 'Hide From Changelog' ||
                label.name === releaseRequestLabel
            )).length > 0;
        const mergedAfterLastUpdate = moment(pr.mergedAt)
            .isAfter(changelogLastUpdateDate.add(1, 'day'));
        return mergedAfterLastUpdate && hiddenFromChangelog === false;
    });
    pullRequests = pullRequests.map(pr => ({ title: pr.title, body: pr.body }));
    return pullRequests;
}

function getOldChangelog(changeLogFilePath) {
    if (fs.existsSync(changeLogFilePath) === false) {
        fs.writeFileSync(changeLogFilePath, '');
    }
    return fs.readFileSync(changeLogFilePath);
}

function generateChangelog(graphPullRequests, changeLogFilePath, newVersionName) {
    const todaysDate = moment().format(changeLogDateFormat);
    const oldChangelogBuffer = getOldChangelog(changeLogFilePath);
    const changelogLastUpdateDate = getChangelogLastUpdateDate(oldChangelogBuffer);
    const newPullRequests = filterPullRequests(graphPullRequests, changelogLastUpdateDate);
    if (newPullRequests.length > 0) {
        let updatedChangelogParts = [];
        updatedChangelogParts.push(`# UI React ${newVersionName} (${todaysDate})`);
        newPullRequests.forEach((pullRequest) => {
            updatedChangelogParts.push(`## ${pullRequest.title}`);
            updatedChangelogParts.push(`${pullRequest.body}`);
        });
        updatedChangelogParts.push(oldChangelogBuffer.toString());
        updatedChangelogParts = updatedChangelogParts.map(part => stripComments(part));
        updatedChangelogParts.unshift(formatLastUpdatedDate(todaysDate));
        const updatedChangelog = updatedChangelogParts.join('\n\n').trim();
        fs.writeFileSync(
            changeLogFilePath,
            updatedChangelog,
            error => (error ? console.log(chalk.bgRed(error)) : null),
        );
        shell.exec('git add CHANGELOG.md', executeSilently);
        shell.exec(`git commit -m "update changelog for version ${newVersionName}"`, executeSilently);
    }
}

module.exports = { generateChangelog };
