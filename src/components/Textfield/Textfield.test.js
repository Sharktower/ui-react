/* global describe, expect, it, shallow  */
import React from 'react';
import Textfield from './Textfield';

describe('Textfield', () => {
    it('renders a div element', () => {
        const textfield = shallow(<Textfield />);
        expect(textfield.find('div').length).to.equal(1);
    });

    it('has the correct class', () => {
        const textfield = shallow(<Textfield />);
        expect(textfield.find('div').hasClass('uir-textfield')).to.equal(true);
    });

    it('can pass in a className prop', () => {
        const exampleClass = 'test-me';
        const textfield = shallow(<Textfield className={exampleClass} />);
        expect(textfield.find('div').hasClass(exampleClass)).to.equal(true);
    });
});
