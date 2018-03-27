/* global describe, expect, it, beforeEach, afterEach */
import sinon from 'sinon';
import PropTypes from 'prop-types';
import StyleObjectPropType from './style';

function validateRunner(value) {
    const types = {
        style: StyleObjectPropType,
    };
    const values = {
        style: value,
    };
    PropTypes.checkPropTypes(types, values, 'style', 'MockComponent');
}

describe('Style Object Prop Type', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('throws error if style is not passed an object', () => {
        validateRunner('test');
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('Failed style type: Invalid style `style` of type `string` supplied to `MockComponent`, expected an object.');
    });

    it('does not throw an error if passed an object', () => {
        validateRunner({ top: '10px' });
        // eslint-disable-next-line no-console
        expect(console.error).to.not.be.called();
    });
});
