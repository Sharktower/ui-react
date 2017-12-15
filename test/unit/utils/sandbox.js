/* global afterEach */
// Taken from: https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/utils/sandbox.js
import sinon from 'sinon';

/**
 * Sinon Sandbox
 * http://sinonjs.org/docs/#sinon-sandbox
 *
 * A sandbox to house spy(), stub(), mock(), etc. that is automatically reset after each test.
 */
const sandbox = sinon.sandbox.create();

afterEach(() => {
    sandbox.restore();
});

export default sandbox;
