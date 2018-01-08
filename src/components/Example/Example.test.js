/* global describe, expect, it, shallow */
import React from 'react';
import Example from './Example';

describe('Example', () => {
    it('renders a div by default', () => {
        const wrapper = shallow((
            <Example />
        ));
        expect(wrapper).to.have.tagName('div');
    });
});
