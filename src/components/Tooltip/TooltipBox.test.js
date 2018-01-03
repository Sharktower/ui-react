/* global describe, expect, it, shallow, beforeEach, afterEach */
import React from 'react';
import sinon from 'sinon';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';

describe('TooltipBox', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('complains if children not provided', () => {
        shallow(<TooltipBox />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('The prop `children` is marked as required in `TooltipBox`');
    });

    it('renders a div element', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox).to.have.tagName('div');
    });

    it('has correct parent class', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox).to.have.className('uir-tooltip-box');
    });

    it('has default theme class as standard', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox).to.have.className('uir-tooltip-box--default');
    });

    it('adds class when default theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="default">contents</TooltipBox>);
        expect(tooltipBox).to.have.className('uir-tooltip-box--default');
    });

    it('adds class when success theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="success">contents</TooltipBox>);
        expect(tooltipBox).to.have.className('uir-tooltip-box--success');
    });

    it('adds class when error theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="error">contents</TooltipBox>);
        expect(tooltipBox).to.have.className('uir-tooltip-box--error');
    });

    it('can pass string in children props', () => {
        const contents = 'this is an example';
        const tooltipBox = shallow(<TooltipBox>{contents}</TooltipBox>);
        expect(tooltipBox).to.have.text(contents);
    });

    it('can pass element in children props', () => {
        const contents = <Avatar name="Matt Davies" />;
        const tooltipBox = shallow(<TooltipBox>{contents}</TooltipBox>);
        expect(tooltipBox.find(Avatar).length).to.equal(1);
    });
});
