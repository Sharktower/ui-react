/* global describe, expect, it, shallow */
import React from 'react';
import { sandbox } from '../../../test/unit/utils';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

describe('IconButton', () => {
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

    describe('isDisabled', () => {
        it('adds class .uir-Button-disabled', () => {
            const wrapper = shallow(<IconButton isDisabled><IconArrow /></IconButton>).dive();

            expect(wrapper).to.have.className('uir-Button-disabled');
        });
    });

    describe('isFluid', () => {
        it('does not add class uir-Button-fluid', () => {
            const wrapper = shallow(<IconButton isFluid><IconArrow /></IconButton>).dive();

            expect(wrapper).not.to.have.className('uir-Button-fluid');
        });
    });

    describe('isActive', () => {
        it('adds class .uir-Button-active', () => {
            const wrapper = shallow(<IconButton isActive><IconArrow /></IconButton>).dive();

            expect(wrapper).to.have.className('uir-Button-active');
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
