/* global before, describe, expect, it */
import { proxyDataProps } from './data-props';

const props = {
    test: 'test123',
    'data-test': 'data-test-123',
    anotherProp: 'another',
    'data-another-testProp': { testKey: 'testValue' },
};

describe('data-prop-utils', () => {
    let proxied;

    before(() => {
        proxied = proxyDataProps(props);
    });

    it('returns data- prefixed props', () => {
        expect(proxied).to.have.property('data-test', 'data-test-123');
        expect(proxied).to.have.property('data-another-testProp').that.deep.equals({ testKey: 'testValue' });
    });

    it('filters out other props', () => {
        expect(proxied).not.to.have.property('test');
        expect(proxied).not.to.have.property('anotherProp');
    });
});
