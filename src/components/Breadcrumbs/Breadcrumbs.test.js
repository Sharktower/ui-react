/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import Breadcrumbs from './Breadcrumbs';

const MockLink = () => (
    <span>Link</span>
);

const MockSeparator = () => (
    <span> | </span>
);

describe('Breadcrumbs', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.isConformant(Breadcrumbs, { requiredProps: { trail: [] } });

    it('complains if trail is not provided', () => {
        shallow(<Breadcrumbs />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('The prop `trail` is marked as required in `Breadcrumbs`');
    });

    it('renders a single breadcrumb', () => {
        const breadcrumbs = shallow(<Breadcrumbs trail={[<MockLink />]} />);
        expect(breadcrumbs.find(MockLink).length).to.equal(1);
    });

    it('renders a trail of breadcrumbs', () => {
        const breadcrumbs = shallow(<Breadcrumbs trail={[<MockLink />, <MockLink />]} />);
        expect(breadcrumbs.find(MockLink).length).to.equal(2);
    });

    it('renders a whole bunch of breadcrumbs', () => {
        const mockCrumbs = [];
        for (let i = 0; i < 10; i++) { // eslint-disable-line no-plusplus
            mockCrumbs.push(<MockLink />);
        }
        const breadcrumbs = shallow(<Breadcrumbs trail={mockCrumbs} />);
        expect(breadcrumbs.find(MockLink).length).to.equal(10);
    });

    it('renders the default separator', () => {
        const breadcrumbs = shallow(<Breadcrumbs trail={[<MockLink />, <MockLink />]} />);
        expect(breadcrumbs.find('svg').length).to.equal(1);
    });

    it('renders a custom separator', () => {
        const breadcrumbs = shallow(<Breadcrumbs
            separator={<MockSeparator />}
            trail={[<MockLink />, <MockLink />]}
        />);
        expect(breadcrumbs.find(MockSeparator).length).to.equal(1);
    });

    it('can set an aria label', () => {
        const testLabel = 'My Custom Label';
        const breadcrumbs = shallow(<Breadcrumbs
            ariaLabel={testLabel}
            trail={[<MockLink />, <MockLink />]}
        />);
        expect(breadcrumbs.prop('ariaLabel')).to.be(testLabel);
    });
});
