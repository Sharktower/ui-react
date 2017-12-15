// Based on: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/specs/commonTests/commonHelpers.js

export default (testName, Component) => {
    const throwError = (msg) => {
        throw new Error(`${testName}: ${msg} \n  Component: ${Component && Component.name}`);
    };

    const assertRequired = (required, description) => (
        required || throwError(`Required ${description}, got: ${required} (${typeof required})`)
    );

    return {
        assertRequired,
        throwError,
    };
};
