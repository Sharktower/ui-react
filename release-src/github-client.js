/* eslint-disable import/no-extraneous-dependencies */

const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { createHttpLink } = require('apollo-link-http');
const { setContext } = require('apollo-link-context');
const { InMemoryCache } = require('apollo-cache-inmemory');
const GithubRestApi = require('github');

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    fetch,
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.GITHUB_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});

// @NB: eventually we will only need the GraphQL client,
//      once all endpoints have been transfered to v4 of the API

const githubGraphQLClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

// @NB: temporarily there are some requests we can
//      only make via the older REST API (v3)

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

module.exports = { githubGraphQLClient, githubRestApi };
