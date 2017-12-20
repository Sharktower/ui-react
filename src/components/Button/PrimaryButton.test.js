/* global describe, expect, it, shallow */
import React from 'react';
import Button from './Button';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <PrimaryButton>Foo</PrimaryButton>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('wraps a Button component', () => {
        const wrapper = shallow((
            <PrimaryButton>Foo</PrimaryButton>
        ));

        expect(wrapper).to.have.exactly(1).descendants(Button);
    });

    it('adds class .uir-PrimaryButton', () => {
        const wrapper = shallow(<PrimaryButton>Foo</PrimaryButton>);

        expect(wrapper).to.have.className('uir-PrimaryButton');
    });

    describe('className', () => {
        it('adds user provided class', () => {
            const wrapper = shallow(<PrimaryButton className="foo-bar">Foo</PrimaryButton>);

            expect(wrapper).to.have.className('foo-bar');
        });
    });

    describe('isClear', () => {
        it('does not add class .uir-Button-clear', () => {
            const wrapper = shallow(<PrimaryButton isClear>Foo</PrimaryButton>);

            expect(wrapper).not.to.have.className('uir-Button-clear');
        });
    });
});
