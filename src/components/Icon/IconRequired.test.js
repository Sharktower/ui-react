/* global describe, expect, it, shallow */
import React from 'react';
import IconRequired from './IconRequired';

describe('IconRequired', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconRequired />);
        expect(icon).to.have.className('uir-icon uir-icon-required');
    });
});
