/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import getClassNameFromBoolPropKey from '../../../test/unit/utils/getClassNameFromBoolPropKey';
import Button from './Button';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
    common.rendersChildren(PrimaryButton);

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

    it('adds class .uir-primary-button', () => {
        const wrapper = shallow(<PrimaryButton>Foo</PrimaryButton>);

        expect(wrapper).to.have.className('uir-primary-button');
    });

    describe('className', () => {
        it('adds user provided class', () => {
            const wrapper = shallow(<PrimaryButton className="foo-bar">Foo</PrimaryButton>);

            expect(wrapper).to.have.className('foo-bar');
        });
    });

    describe('isClear', () => {
        const isClearClassName = getClassNameFromBoolPropKey(Button, 'isClear');

        it(`does not add class ${isClearClassName}`, () => {
            const wrapper = shallow(<PrimaryButton isClear>Foo</PrimaryButton>);

            expect(wrapper).not.to.have.className(isClearClassName);
        });
    });
});
