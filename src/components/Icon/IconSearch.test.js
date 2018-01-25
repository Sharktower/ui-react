/* global describe, expect, it, shallow */
import React from 'react';
import IconSearch from './IconSearch';

describe('IconSearch', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconSearch />);
        expect(icon).to.have.className('uir-icon uir-icon-search');
    });
});
