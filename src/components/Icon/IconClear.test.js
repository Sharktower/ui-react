/* global describe, expect, it, shallow */
import React from 'react';
import IconClear from './IconClear';

describe('IconClear', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconClear />);
        expect(icon).to.have.className('uir-icon uir-icon-clear');
    });
});
