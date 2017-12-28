/* global describe, expect, it, shallow */
import React from 'react';
import { sandbox } from '../../../test/unit/utils';
import * as common from '../../../test/unit/commonTests';
import getClassNameFromBoolPropKey from '../../../test/unit/utils/getClassNameFromBoolPropKey';
import Button from './Button';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

describe('IconButton', () => {
    const buttonActiveClassName = getClassNameFromBoolPropKey(Button, 'isActive');
    common.propKeyToClassName(IconButton, 'isActive', {
        className: buttonActiveClassName,
        requiredProps: { children: 'Foo' },
    });
    const buttonDisabledClassName = getClassNameFromBoolPropKey(Button, 'isDisabled');
    common.propKeyToClassName(IconButton, 'isDisabled', {
        className: buttonDisabledClassName,
        requiredProps: { children: 'Foo' },
    });

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton><IconArrow /></IconButton>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('wraps a Button component', () => {
        const wrapper = shallow((
            <IconButton>Foo</IconButton>
        ));

        expect(wrapper).to.have.exactly(1).descendants(Button);
    });

    it('adds class .uir-icon-button', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>);
        expect(wrapper).to.have.className('uir-icon-button');
    });

    describe('className', () => {
        it('adds user provided class .custom-class', () => {
            const wrapper = shallow((
                <IconButton className="custom-class"><IconArrow /></IconButton>
            ));

            expect(wrapper).to.have.className('custom-class');
        });
    });

    describe('isFluid', () => {
        const isFluidClassName = getClassNameFromBoolPropKey(Button, 'isFluid');

        it(`does not add class ${isFluidClassName}`, () => {
            const wrapper = shallow(<IconButton isFluid><IconArrow /></IconButton>).dive();

            expect(wrapper).not.to.have.className(isFluidClassName);
        });
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <IconButton><IconArrow /></IconButton>
            )).dive();
            const clickComponent = () => {
                wrapper.simulate('click', syntheticEvent);
            };

            expect(clickComponent).not.to.throw();
        });

        it('is called when clicked', () => {
            const onClick = sandbox.spy();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <IconButton onClick={onClick}><IconArrow /></IconButton>
            )).dive();

            wrapper.simulate('click', syntheticEvent);
            expect(onClick).to.have.been.calledOnce();
            expect(onClick).to.have.been.calledWithExactly(syntheticEvent);
        });
    });
});
