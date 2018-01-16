/* eslint-disable import/no-extraneous-dependencies */

const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { createHttpLink } = require('apollo-link-http');
const { setContext } = require('apollo-link-context');
const { InMemoryCache } = require('apollo-cache-inmemory');

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

const githubClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

module.exports = githubClient;
