/* global describe, expect, it, jest, shallow */
import React from 'react';
import * as common from '../../../test/jest/commonTests';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);

    it('Button should render an HTML tag button', () => {
        const wrapper = shallow((
            <Button />
        ));

        expect(wrapper).toHaveTagName('button');
    });

    it('Button should render with class .uir-button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('.uir-button').length).toBe(1);
    });

    it('Default button should render with class .uir-button-skin-default', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('.uir-button-skin-default').length).toBe(1);
    });

    it('Clear button should render with class .uir-button-skin-clear', () => {
        const wrapper = shallow(<Button skin="clear" />);
        expect(wrapper.find('.uir-button-skin-clear').length).toBe(1);
    });

    it('Primary button should render with class .uir-button-skin-primary', () => {
        const wrapper = shallow(<Button skin="primary" />);
        expect(wrapper.find('.uir-button-skin-primary').length).toBe(1);
    });

    it('Disabled button should render with class .uir-button-disabled', () => {
        const wrapper = shallow(<Button isDisabled />);
        expect(wrapper.find('.uir-button-disabled').length).toBe(1);
    });

    it('Active button should render with class .uir-button-active', () => {
        const wrapper = shallow(<Button isActive />);
        expect(wrapper.find('.uir-button-active').length).toBe(1);
    });

    it('should render three Button components', () => {
        const wrapper = shallow((
            <div>
                <Button />
                <Button />
                <Button />
            </div>
        ));
        expect(wrapper.find(Button).length).toBe(3);
    });
/*
    it('should re-render title imeditaley', () => {
        class DefaultButton extends React.Component {
            constructor() {
                super();
                state = {
                    className: 'initial',
                }
            }
            handleClick = () => {
                this.setState({ className: 'loading' });
            }
            render() {
                return <Button className={this.state.className} onClick={this.handleClick}>Button</Button>;
            }
        }
        const wrapper = mount(
          <DefaultButton />
        );
        wrapper.simulate('click');
        expect(wrapper.hasClass('loading')).toBe(true);
      });
*/
    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <Button />
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
                <Button onClick={onClick} />
            ));

            wrapper.simulate('click', syntheticEvent);
            expect(onClick.mock.calls.length).toEqual(1);
            expect(onClick).toBeCalledWith(syntheticEvent);
        });
    });
});
