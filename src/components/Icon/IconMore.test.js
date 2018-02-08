/* global describe, expect, it, shallow */
import React from 'react';
import IconArrow from './IconMore';

describe('IconMore', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconArrow />);
        expect(icon).to.have.className('uir-icon uir-icon-more');
    });
});
