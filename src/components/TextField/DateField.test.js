/* global describe, expect, it, shallow */
import React from 'react';
import DateField from './DateField';

function createDateField() {
    return shallow(<DateField label="My Date Input" />);
}

describe('TextField', () => {
    it('renders an div wrapper element', () => {
        const dateField = createDateField();
        expect(dateField).to.have.tagName('div');
    });

    it('has the correct classes', () => {
        const dateField = createDateField();
        expect(dateField).to.have.className('uir-datefield');
    });
});
