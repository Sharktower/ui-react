/* global describe, expect, it, mount, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';

describe('Button', () => {
    common.rendersChildren(Button, { requiredProps: { onClick: () => {} } });
    common.propKeyToClassName(Button, 'isActive', { requiredProps: { children: 'Foo', onClick: () => {} } });
    common.propKeyToClassName(Button, 'isDisabled', { requiredProps: { children: 'Foo', onClick: () => {} } });
    common.propKeyToClassName(Button, 'isFullWidth', { requiredProps: { children: 'Foo', onClick: () => {} } });

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <Button onClick={() => {}}>Foo</Button>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('renders with class .uir-button', () => {
        const wrapper = shallow(<Button onClick={() => {}}>Foo</Button>);

        expect(wrapper).to.have.className('uir-button');
    });

    it('renders three Button components', () => {
        const wrapper = shallow((
            <div>
                <Button isActive onClick={() => {}}>Foo</Button>
                <Button onClick={() => {}}>Foo</Button>
                <Button isDisabled onClick={() => {}}>Foo</Button>
            </div>
        ));

        expect(wrapper.find(Button).length).to.equal(3);
    });

    describe('hasConfirm', () => {
        const defaultConfirmButton = (
            <Button hasConfirm onClick={() => {}}>Foo</Button>
        );

        it('does not contain confirmation span by default', () => {
            const wrapper = shallow((
                <Button onClick={() => {}}>Foo</Button>
            ));

            expect(wrapper).not.to.have.descendants('.uir-button-confirmation');
        });

        it('contains confirmation span', () => {
            const wrapper = shallow(defaultConfirmButton);

            expect(wrapper).to.have.descendants('.uir-button-confirmation');
        });

        it('does not apply --confirming class by default', () => {
            const wrapper = shallow(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
        });

        it('does not apply --confirmed class by default', () => {
            const wrapper = shallow(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            expect(confirmation).not.to.have.className('uir-button-confirmation--confirmed');
        });

        it('applies --confirming class after click', () => {
            const wrapper = shallow(defaultConfirmButton);

            wrapper.simulate('click');

            const confirmation = wrapper.find('.uir-button-confirmation');

            expect(confirmation).to.have.className('uir-button-confirmation--confirming');
        });

        it('removes --confirming class after second click', () => {
            const wrapper = shallow(defaultConfirmButton);

            wrapper.simulate('click');
            wrapper.simulate('click');

            const confirmation = wrapper.find('.uir-button-confirmation');

            expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
        });

        it('applies --confirmed class after second click', () => {
            const wrapper = shallow(defaultConfirmButton);

            wrapper.simulate('click');
            wrapper.simulate('click');

            const confirmation = wrapper.find('.uir-button-confirmation');

            expect(confirmation).to.have.className('uir-button-confirmation--confirmed');
        });

        describe('confirmText', () => {
            it('shows default text', () => {
                const wrapper = shallow(defaultConfirmButton);

                wrapper.simulate('click');
                expect(wrapper).to.contain.text('Confirm?');
            });

            it('shows custom text', () => {
                const wrapper = mount((
                    <Button hasConfirm confirmText="BarBaz?" onClick={() => {}}>Foo</Button>
                ));

                wrapper.simulate('click');
                expect(wrapper).to.contain.text('BarBaz?');
            });
        });

        describe('confirmedText', () => {
            it('shows default text', () => {
                const wrapper = mount(defaultConfirmButton);

                wrapper.simulate('click');
                wrapper.simulate('click');
                expect(wrapper.update()).to.contain.text('Cool!');
            });

            it('shows custom text', () => {
                const wrapper = shallow((
                    <Button hasConfirm confirmedText="BarBaz!" onClick={() => {}}>Foo</Button>
                ));

                wrapper.simulate('click');
                wrapper.simulate('click');
                expect(wrapper).to.contain.text('BarBaz!');
            });
        });

        describe('onBlur', () => {
            it('cancels confirmation on loss of focus', () => {
                const wrapper = shallow(defaultConfirmButton);

                wrapper.simulate('click');
                let confirmation = wrapper.find('.uir-button-confirmation');

                expect(confirmation).to.have.className('uir-button-confirmation--confirming');

                wrapper.simulate('blur');
                confirmation = wrapper.find('.uir-button-confirmation');

                expect(wrapper).not.to.contain.text('Confirm?');
                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
            });

            // This test is a bit redundant but required to achieve 100% coverage
            it('does nothing on loss of focus after full interaction', () => {
                const wrapper = shallow(defaultConfirmButton);

                wrapper.simulate('click');
                wrapper.simulate('click');
                let confirmation = wrapper.find('.uir-button-confirmation');

                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');

                wrapper.simulate('blur');
                confirmation = wrapper.find('.uir-button-confirmation');

                expect(wrapper).not.to.contain.text('Confirm?');
                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
            });
        });
    });

    describe('icon', () => {
        it('does not contain an icon by default', () => {
            const wrapper = mount((
                <Button onClick={() => {}}>Foo</Button>
            ));

            expect(wrapper).not.to.contain(<IconArrow />);
        });

        it('contains an icon', () => {
            const wrapper = mount((
                <Button icon={<IconArrow />} onClick={() => {}}>Foo</Button>
            ));

            expect(wrapper).to.contain(<IconArrow />);
        });
    });

    describe('iconPosition', () => {
        it('adds left position class by default', () => {
            const wrapper = mount((
                <Button icon={<IconArrow />} onClick={() => {}}>Foo</Button>
            ));

            expect(wrapper).to.have.className('uir-button--icon-left');
        });

        it('renders icon before text by default', () => {
            const wrapper = mount((
                <Button icon={<IconArrow />} onClick={() => {}}>Foo</Button>
            ));

            expect(wrapper).to.contain.html('</svg><span class="uir-button-content">Foo');
        });

        describe('left', () => {
            it('adds left position class', () => {
                const wrapper = mount((
                    <Button icon={<IconArrow />} iconPosition="left" onClick={() => {}}>Foo</Button>
                ));

                expect(wrapper).to.have.className('uir-button--icon-left');
            });

            it('renders icon before text', () => {
                const wrapper = mount((
                    <Button icon={<IconArrow />} iconPosition="left" onClick={() => {}}>Foo</Button>
                ));

                expect(wrapper).to.contain.html('</svg><span class="uir-button-content">Foo');
            });
        });

        describe('right', () => {
            it('adds right position class', () => {
                const wrapper = mount((
                    <Button icon={<IconArrow />} iconPosition="right" onClick={() => {}}>Foo</Button>
                ));

                expect(wrapper).to.have.className('uir-button--icon-right');
            });

            it('renders icon after text', () => {
                const wrapper = mount((
                    <Button icon={<IconArrow />} iconPosition="right" onClick={() => {}}>Foo</Button>
                ));

                expect(wrapper).to.contain.html('<span class="uir-button-content">Foo</span><svg class="uir-icon');
            });
        });
    });

    describe('isDisabled', () => {
        it('does not add disabled attribute when not defined', () => {
            const wrapper = shallow(<Button onClick={() => {}}>Foo</Button>);

            expect(wrapper).not.to.have.attr('disabled');
        });

        it('adds disabled attribute', () => {
            const wrapper = shallow(<Button isDisabled onClick={() => {}}>Foo</Button>);

            expect(wrapper).to.have.attr('disabled');
        });
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <Button onClick={() => {}}>Foo</Button>
            ));
            const clickComponent = () => {
                wrapper.simulate('click', syntheticEvent);
            };

            expect(clickComponent).not.to.throw();
        });

        it('is called when clicked', () => {
            const onClick = sandbox.spy();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <Button onClick={onClick}>Foo</Button>
            ));

            wrapper.simulate('click', syntheticEvent);
            expect(onClick).to.have.been.calledOnce();
            expect(onClick).to.have.been.calledWithExactly(syntheticEvent);
        });

        it('is not called when clicked on disabled button', () => {
            const onClick = sandbox.spy();
            const preventDefault = sandbox.spy();
            const wrapper = shallow((
                <Button isDisabled onClick={onClick}>Foo</Button>
            ));

            wrapper.simulate('click', { preventDefault });
            expect(onClick).not.to.have.been.called();
            expect(preventDefault).to.have.been.calledOnce();
        });
    });

    describe('type', () => {
        // This could be extracted
        // into a generic test for propKey+propValue that result in className
        function testTypeProp(propValue) {
            describe(propValue, () => {
                const className = `uir-button--${propValue}`;

                it(`does not add className ${className} when prop not defined`, () => {
                    const wrapper = shallow(<Button onClick={() => {}}>Foo</Button>);

                    expect(wrapper).not.to.have.className(className);
                });

                it(`adds className ${className}`, () => {
                    const wrapper = shallow((
                        <Button type={propValue} onClick={() => {}}>Foo</Button>
                    ));

                    expect(wrapper).to.have.className(className);
                });
            });
        }

        testTypeProp('clear');
        testTypeProp('primary');
    });
});
