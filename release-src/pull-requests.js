/* eslint-disable import/no-extraneous-dependencies, no-console */

const gql = require('graphql-tag');
const githubClient = require('./github-client');
const GithubRestApi = require('github');

const githubRestApi = new GithubRestApi({
    host: 'api.github.com',
    protocol: 'https',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

githubRestApi.authenticate({
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
                    field: MERGED_AT,
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

const releaseRequestLabel = 'Release Request';

function createPullRequest(releaseBranch, newVersionName) {
    return githubRestApi.pullRequests.create({
        owner: 'Mudano',
        repo: 'ui-react',
        title: `Release ${newVersionName}`,
        body: `Automatic release of ${newVersionName}`,
        head: releaseBranch,
        base: 'master',
        labels: [releaseRequestLabel],
    });
}

module.exports = {
    getPullRequests,
    createPullRequest,
    releaseRequestLabel,
};
