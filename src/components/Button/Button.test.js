/* global describe, expect, it, jest, shallow */
import React from 'react';
import * as common from '../../../test/jest/commonTests';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);

    it('Button should render an HTML tag button', () => {
        const wrapper = shallow((
            <Button>Foo</Button>
        ));

        expect(wrapper).toHaveTagName('button');
    });

    it('Button should render with class .uir-Button', () => {
        const wrapper = shallow(<Button>Foo</Button>);
        expect(wrapper.find('.uir-Button').length).toBe(1);
    });

    it('Clear button should render with class .uir-Button-clear', () => {
        const wrapper = shallow(<Button skin="clear">Foo</Button>);
        expect(wrapper.find('.uir-Button-clear').length).toBe(1);
    });

    it('Disabled button should render with class .uir-Button-disabled', () => {
        const wrapper = shallow(<Button isDisabled>Foo</Button>);
        expect(wrapper.find('.uir-Button-disabled').length).toBe(1);
    });

    it('Active button should render with class .uir-Button-active', () => {
        const wrapper = shallow(<Button isActive>Foo</Button>);
        expect(wrapper.find('.uir-Button-active').length).toBe(1);
    });

    it('should render three Button components', () => {
        const wrapper = shallow((
            <div>
                <Button isActive>Foo</Button>
                <Button>Foo</Button>
                <Button isDisabled>Foo</Button>
            </div>
        ));
        expect(wrapper.find(Button).length).toBe(3);
    });
    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <Button>Foo</Button>
            ));
            const clickComponent = () => {
                wrapper.simulate('click', syntheticEvent);
            };

            expect(clickComponent).not.toThrow();
        });

        it('is called when clicked', () => {
            const onClick = jest.fn();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <Button onClick={onClick}>Foo</Button>
            ));

            wrapper.simulate('click', syntheticEvent);
            expect(onClick.mock.calls.length).toEqual(1);
            expect(onClick).toBeCalledWith(syntheticEvent);
        });

        it('is not called when clicked on Disable button', () => {
            const onClick = jest.fn();
            const preventDefault = jest.fn();
            const wrapper = shallow((
                <Button isDisabled onClick={onClick}>Foo</Button>
            ));
            wrapper.simulate('click', { preventDefault });
            expect(onClick).not.toHaveBeenCalledTimes(1);
            expect(preventDefault).toHaveBeenCalledTimes(1);
        });
    });
});
