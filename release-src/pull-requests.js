/* eslint-disable import/no-extraneous-dependencies, no-console */

const chalk = require('chalk');
const gql = require('graphql-tag');
const githubClient = require('./github-client');
const GithubClientOld = require('github');

const githubClientOld = new GithubClientOld({
    host: 'api.github.com',
    protocol: 'https',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

githubClientOld.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
});

function getPullRequests() {
    return githubClient.query({
        query: gql`
        {
          repository(owner: "Mudano", name: "ui-react") {
            pullRequests(
                first: 100,
                states: [MERGED],
                orderBy: {
                    field: UPDATED_AT,
                    direction: DESC
                }
            ) {
              nodes {
                title
                body
                mergedAt
                labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
        `,
    });
}

function createPullRequest(releaseBranch, newVersionName) {
    return githubClientOld.pullRequests.create({
        owner: 'Mudano',
        repo: 'ui-react',
        title: `Release ${newVersionName}`,
        body: `Automatic release of ${newVersionName}`,
        head: releaseBranch,
        base: 'master',
    });
}

function mergePullRequest(pullRequestNumber) {
    githubClientOld.pullRequests.merge({
        owner: 'Mudano',
        repo: 'ui-react',
        number: pullRequestNumber,
    }, (error) => {
        if (error) {
            console.error(error.message);
            console.log(chalk.bgRed('Unable to create pull request!'));
        }
    });
}

module.exports = {
    getPullRequests,
    createPullRequest,
    mergePullRequest,
};
