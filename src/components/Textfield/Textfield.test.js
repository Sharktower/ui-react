/* global describe, expect, it, shallow  */
import React from 'react';
import TextField from './TextField';

describe('TextField', () => {
    it('renders an div wrapper element', () => {
        const textField = shallow(<TextField />);
        expect(textField).to.have.tagName('div');
    });

    it('renders an label element', () => {
        const textField = shallow(<TextField />);
        expect(textField.find('label').length).to.equal(1);
    });

    it('renders an input element', () => {
        const textField = shallow(<TextField />);
        expect(textField.find('input').length).to.equal(1);
    });

    it('has the correct classes', () => {
        const textField = shallow(<TextField />);
        expect(textField).to.have.className('uir-textfield');
        expect(textField.find('label')).to.have.className('uir-textfield-label');
        expect(textField.find('input')).to.have.className('uir-textfield-input');
    });

    it('can pass in a className prop', () => {
        const exampleClass = 'test-me';
        const textField = shallow(<TextField className={exampleClass} />);
        expect(textField).to.have.className(exampleClass);
    });
});
