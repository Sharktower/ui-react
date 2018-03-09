/* global describe, expect, it, beforeEach, afterEach */
import sinon from 'sinon';
import PropTypes from 'prop-types';
import ListPropType from './list';

function validateRunner(value) {
    const types = {
        list: ListPropType(['alpha', 'beta']),
    };
    const values = {
        list: value,
    };
    PropTypes.checkPropTypes(types, values, 'list', 'MockComponent');
}

describe('List Prop Type', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('logs error if value not in list', () => {
        validateRunner('charlie');
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('Invalid list `list` of value `charlie` supplied to `MockComponent`, expected one of ["alpha","beta"].');
    });

    it('does not log error if value is in list', () => {
        validateRunner('alpha');
        // eslint-disable-next-line no-console
        expect(console.error).to.not.be.called();
    });

    it('can read expectedValues', () => {
        const testValues = ['alpha', 'beta'];
        expect(ListPropType(testValues).expectedValues).to.deep.equal(testValues);
    });
});
