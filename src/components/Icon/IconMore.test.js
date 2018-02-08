/* global describe, expect, it, shallow */
import React from 'react';
import IconMore from './IconMore';

describe('IconMore', () => {
    it('renders an SVG tag', () => {
        const wrapper = shallow(<IconMore />);

        expect(wrapper).to.have.tagName('svg');
    });

    it('has the appropriate classes', () => {
        const icon = shallow(<IconMore />);
        expect(icon).to.have.className('uir-icon uir-icon-more');
    });
});
