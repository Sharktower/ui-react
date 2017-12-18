/* global describe, expect, it, shallow */
import React from 'react';
import { sandbox } from '../../../test/unit/utils';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

describe('IconButton', () => {
    it('IconButton should render an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton><IconArrow /></IconButton>
        )).dive();

        expect(wrapper).to.have.tagName('button');
    });

    it('Button should render with class .uir-IconButton', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-IconButton').length).to.equal(1);
    });

    it('Default IconButton should render with class .uir-IconButton', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-IconButton').length).to.equal(1);
    });

    it('Clear IconButton should render with custom class .custom-class', () => {
        const wrapper = shallow((
            <IconButton className="custom-class"><IconArrow /></IconButton>
        )).dive();
        expect(wrapper.find('.custom-class').length).to.equal(1);
    });
    it('Disabled IconButton should render with class .uir-Button-disabled', () => {
        const wrapper = shallow(<IconButton isDisabled><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-disabled').length).to.equal(1);
    });

    it('IconButton should not be fluid, even if isFluid flag is passed', () => {
        const wrapper = shallow(<IconButton isFluid><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-fluid').length).to.equal(0);
    });

    it('Active IconButton should render with class .uir-Button-active', () => {
        const wrapper = shallow(<IconButton isActive><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-active').length).to.equal(1);
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
