/* eslint-disable import/no-extraneous-dependencies, no-console */

const gql = require('graphql-tag');
const { githubGraphQLClient, githubRestApi } = require('./github-client');
const githubVariables = require('./github-variables');

function getPullRequests() {
    return githubGraphQLClient.query({
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
    return githubRestApi.pullRequests.create({
        owner: githubVariables.owner,
        repo: githubVariables.repo,
        title: `Release ${newVersionName}`,
        body: `Automatic release of ${newVersionName}`,
        head: releaseBranch,
        base: 'master',
    }).then((pullRequest) => {
        githubRestApi.issues.addLabels({
            owner: githubVariables.owner,
            repo: githubVariables.repo,
            number: pullRequest.data.number,
            labels: [githubVariables.releaseRequestLabel],
        }).error((error) => {
            console.log(error);
        });
        return pullRequest;
    }).error((error) => {
        console.log(error);
    });
}

module.exports = {
    getPullRequests,
    createPullRequest,
};
