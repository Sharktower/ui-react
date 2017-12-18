/* global describe, expect, it, jest, shallow */
import React from 'react';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

describe('IconButton', () => {
    it('IconButton should render an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton><IconArrow /></IconButton>
        )).dive();

        expect(wrapper).toHaveTagName('button');
    });

    it('Button should render with class .uir-IconButton', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-IconButton').length).toBe(1);
    });

    it('Default IconButton should render with class .uir-IconButton', () => {
        const wrapper = shallow(<IconButton><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-IconButton').length).toBe(1);
    });

    it('Clear IconButton should render with custom class .custom-class', () => {
        const wrapper = shallow((
            <IconButton className="custom-class"><IconArrow /></IconButton>
        )).dive();
        expect(wrapper.find('.custom-class').length).toBe(1);
    });
    it('Disabled IconButton should render with class .uir-Button-disabled', () => {
        const wrapper = shallow(<IconButton isDisabled><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-disabled').length).toBe(1);
    });

    it('IconButton should not be fluid, even if isFluid flag is passed', () => {
        const wrapper = shallow(<IconButton isFluid><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-fluid').length).toBe(0);
    });

    it('Active IconButton should render with class .uir-Button-active', () => {
        const wrapper = shallow(<IconButton isActive><IconArrow /></IconButton>).dive();
        expect(wrapper.find('.uir-Button-active').length).toBe(1);
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

            expect(clickComponent).not.toThrow();
        });

        it('is called when clicked', () => {
            const onClick = jest.fn();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <IconButton onClick={onClick}><IconArrow /></IconButton>
            )).dive();

            wrapper.simulate('click', syntheticEvent);
            expect(onClick.mock.calls.length).toEqual(1);
            expect(onClick).toBeCalledWith(syntheticEvent);
        });
    });
});
