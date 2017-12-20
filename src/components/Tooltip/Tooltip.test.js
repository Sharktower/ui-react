/* global describe, expect, it, shallow */
import React from 'react';
import Tooltip from '../Tooltip/Tooltip';

describe('Tooltip', () => {
    it('renders a div element', () => {
        const tooltip = shallow(<Tooltip>contents</Tooltip>);
        expect(tooltip.find('div').length).to.equal(1);
    });

    it('parent has correct class', () => {
        const tooltip = shallow(<Tooltip>contents</Tooltip>);
        expect(tooltip.find('div').hasClass('uir-tooltip'))
            .to.equal(true);
    });

    it('can past in children props', () => {
        const contents = 'this is an example';
        const tooltip = shallow(<Tooltip>{contents}</Tooltip>);
        expect(tooltip.find('div').text()).to.equal(contents);
    });

    // complains if not passed a component to children

    // it('complains if chidlren not provided', () => {
    //     shallow(<Tooltip />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('The prop `children` is marked as required in `Tooltip`')).to.equal(true);
    // });
});
