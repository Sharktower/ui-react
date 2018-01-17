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
        requiredProps: { children: 'Foo', onClick: () => {} },
    });
    const buttonDisabledClassName = getClassNameFromBoolPropKey(Button, 'isDisabled');
    common.propKeyToClassName(IconButton, 'isDisabled', {
        className: buttonDisabledClassName,
        requiredProps: { children: 'Foo', onClick: () => {} },
    });

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton onClick={() => {}}><IconArrow /></IconButton>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('wraps a Button component', () => {
        const wrapper = shallow((
            <IconButton onClick={() => {}}>Foo</IconButton>
        ));

        expect(wrapper).to.have.exactly(1).descendants(Button);
    });

    it('adds class .uir-icon-button', () => {
        const wrapper = shallow(<IconButton onClick={() => {}}><IconArrow /></IconButton>);
        expect(wrapper).to.have.className('uir-icon-button');
    });

    describe('className', () => {
        it('adds user provided class .custom-class', () => {
            const wrapper = shallow((
                <IconButton className="custom-class" onClick={() => {}}><IconArrow /></IconButton>
            ));

            expect(wrapper).to.have.className('custom-class');
        });
    });

    describe('isFullWidth', () => {
        const isFullWidthClassName = getClassNameFromBoolPropKey(Button, 'isFullWidth');

        it(`does not add class ${isFullWidthClassName}`, () => {
            const wrapper = shallow((
                <IconButton isFullWidth onClick={() => {}}><IconArrow /></IconButton>
            )).dive();

            expect(wrapper).not.to.have.className(isFullWidthClassName);
        });
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <IconButton onClick={() => {}}><IconArrow /></IconButton>
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
