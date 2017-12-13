/* global describe, expect, it, jest, shallow */
import React from 'react';
import * as common from '../../../test/jest/commonTests';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';


describe('IconButton', () => {
    it('IconButton should render an HTML tag button', () => {
        const wrapper = shallow((
            <IconButton />
        )).dive();

        expect(wrapper).toHaveTagName('button');
    });

    it('Button should render with class .uir-button', () => {
        const wrapper = shallow(<IconButton />).dive();
        expect(wrapper.find('.uir-icon-button').length).toBe(1);
    });

    it('Default IconButton should render with class .uir-icon-button', () => {
        const wrapper = shallow(<IconButton />).dive();
        expect(wrapper.find('.uir-icon-button').length).toBe(1);
    });

    it('Clear IconButton should render with custom class .uir-custom-class', () => {
        const wrapper = shallow(<IconButton className="uir-custom-class" />).dive();
        expect(wrapper.find('.uir-custom-class').length).toBe(1);
    });
    it('Disabled IconButton should render with class .uir-button-disabled', () => {
        const wrapper = shallow(<IconButton isDisabled />).dive();
        expect(wrapper.find('.uir-button-disabled').length).toBe(1);
    });

    it('IconButton should not be fluid, even if isFluid flag is passed', () => {
        const wrapper = shallow(<IconButton isFluid />).dive();
        expect(wrapper.find('.uir-button-fluid').length).toBe(0);
    });

    it('Active IconButton should render with class .uir-button-active', () => {
        const wrapper = shallow(<IconButton isActive />).dive();
        expect(wrapper.find('.uir-button-active').length).toBe(1);
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <IconButton />
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
                <IconButton onClick={onClick} />
            )).dive();

            wrapper.simulate('click', syntheticEvent);
            expect(onClick.mock.calls.length).toEqual(1);
            expect(onClick).toBeCalledWith(syntheticEvent);
        });
    });
});
