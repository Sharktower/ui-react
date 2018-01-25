/* global describe, expect, it, shallow */
import React from 'react';
import IconNotification from './IconNotification';

describe('IconNotification', () => {
    it('has the appropriate classes', () => {
        const icon = shallow(<IconNotification />);
        expect(icon).to.have.className('uir-icon uir-icon-notification');
    });
});
