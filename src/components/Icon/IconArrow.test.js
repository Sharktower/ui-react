/* global describe, expect, it, shallow */
import React from 'react';
import IconArrow from './IconArrow';

describe('IconArrow', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconArrow />);
        expect(icon).to.have.className('uir-icon uir-icon-arrow');
    });
});
