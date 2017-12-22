/* global describe, expect, it, shallow */
import React from 'react';
import TooltipBox from './TooltipBox';

describe('TooltipBox', () => {
    it('renders a div element', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox.find('div').length).to.equal(1);
    });

    it('has correct parent class', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip-box'))
            .to.equal(true);
    });

    it('has default theme class as standard', () => {
        const tooltipBox = shallow(<TooltipBox>contents</TooltipBox>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip-box--default'))
            .to.equal(true);
    });

    it('adds class when default theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="default">contents</TooltipBox>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip-box--default'))
            .to.equal(true);
    });

    it('adds class when success theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="success">contents</TooltipBox>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip-box--success'))
            .to.equal(true);
    });

    it('adds class when error theme provided', () => {
        const tooltipBox = shallow(<TooltipBox status="error">contents</TooltipBox>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip-box--error'))
            .to.equal(true);
    });

    it('can past in children props', () => {
        const contents = 'this is an example';
        const tooltipBox = shallow(<TooltipBox>{contents}</TooltipBox>);
        expect(tooltipBox.find('div').text()).to.equal(contents);
    });

    // @TODO: complains if not passed a component to children

    // it('complains if chidlren not provided', () => {
    //     shallow(<TooltipBox />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('The prop `children` is marked as required in `TooltipBox`')).to.equal(true);
    // });
});
