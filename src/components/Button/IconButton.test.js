/* global describe, expect, it, shallow */
import React from 'react';
import { sandbox } from '../../../test/unit/utils';
import * as common from '../../../test/unit/commonTests';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

describe('IconButton', () => {
    common.propKeyToClassName(IconButton, 'isActive', {
        className: 'uir-Button-active',
        requiredProps: { children: 'Foo' },
    });
    common.propKeyToClassName(IconButton, 'isDisabled', {
        className: 'uir-Button-disabled',
        requiredProps: { children: 'Foo' },
    });

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton><IconArrow /></IconButton>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('adds class .uir-IconButton', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>);
        expect(wrapper).to.have.className('uir-IconButton');
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
        it('does not add class uir-Button-fluid', () => {
            const wrapper = shallow(<IconButton isFluid><IconArrow /></IconButton>).dive();

            expect(wrapper).not.to.have.className('uir-Button-fluid');
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
