/* global describe, it, expect, beforeEach, afterEach  */
import sinon from 'sinon';
import PropTypes from 'prop-types';
import Button from '../components/Button/Button';
import ElementOrStringPropType from './element-or-string';

describe('Element or String Prop Type', () => {
    describe('check prop types for validity', () => {
        const sandbox = sinon.sandbox.create();

        beforeEach(() => {
            sandbox.stub(console, 'error');
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('invalid prop types throws error', () => {
            const propTypes = {
                test: ElementOrStringPropType,
            };
            const props = {
                test: false,
            };
            PropTypes.checkPropTypes(
                propTypes,
                props,
                'prop',
                'testComponent',
                null,
            );
            // eslint-disable-next-line no-console
            expect(console.error).to.be.calledWithMatch('Invalid prop `test` supplied to `testComponent`');
        });

        it('valid prop type string does not throw an error', () => {
            const propTypes = {
                test: ElementOrStringPropType,
            };
            const props = {
                test: 'test',
            };
            PropTypes.checkPropTypes(
                propTypes,
                props,
                'prop',
                'testComponent',
                null,
            );
            // eslint-disable-next-line no-console
            expect(console.error).to.not.be.called();
        });

        it('valid prop type element does not throw an error', () => {
            const propTypes = {
                test: ElementOrStringPropType,
            };
            const props = {
                test: Button,
            };
            PropTypes.checkPropTypes(
                propTypes,
                props,
                'prop',
                'testComponent',
                null,
            );
            // eslint-disable-next-line no-console
            expect(console.error).to.not.be.called();
        });
    });
});
