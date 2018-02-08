/* global describe, expect, it, mount, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';

describe('Button', () => {
    const defaultButton = (<Button onClick={() => {}}>Foo</Button>);

    common.rendersChildren(Button, { requiredProps: { onClick: () => {} } });
    common.rendersTag(Button, 'button', { requiredProps: { onClick: () => {} } });
    common.propKeyToClassName(Button, 'isActive', { requiredProps: { children: 'Foo', onClick: () => {} } });
    common.propKeyToClassName(Button, 'isDisabled', { requiredProps: { children: 'Foo', onClick: () => {} } });
    common.propKeyToClassName(Button, 'isFullWidth', { requiredProps: { children: 'Foo', onClick: () => {} } });

    it('renders with class .uir-button', () => {
        const wrapper = shallow(defaultButton);

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
            const wrapper = shallow(defaultButton);

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
            const wrapper = mount(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            wrapper.simulate('click');

            expect(confirmation).to.have.className('uir-button-confirmation--confirming');
        });

        it('removes --confirming class after confirmation click', () => {
            const wrapper = mount(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            wrapper.simulate('click');
            confirmation.simulate('click');

            expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
        });

        it('applies --confirmed class after confirmation click', () => {
            const wrapper = mount(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            wrapper.simulate('click');
            confirmation.simulate('click');

            expect(confirmation).to.have.className('uir-button-confirmation--confirmed');
        });

        it('removes --confirmed class after animation finished', (done) => {
            const wrapper = mount(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            wrapper.simulate('click');
            confirmation.simulate('click');

            setTimeout(() => {
                expect(confirmation).not.to.have.className('uir-button-confirmation--confirmed');
                done();
            }, 1100);
        });

        it('does not call setState after unmount', (done) => {
            const wrapper = mount(defaultConfirmButton);
            const confirmation = wrapper.find('.uir-button-confirmation');

            sandbox.stub(console, 'error');

            wrapper.simulate('click');
            confirmation.simulate('click');
            wrapper.unmount();

            setTimeout(() => {
                // eslint-disable-next-line no-console
                expect(console.error).not.to.have.been.calledWithMatch('you called setState() on an unmounted component');
                // eslint-disable-next-line no-console
                expect(console.error).not.to.have.been.called();
                done();
            }, 1100);
        });

        it('calls onClick when confirmed', () => {
            const onClick = sandbox.spy();
            const wrapper = mount((
                <Button hasConfirm onClick={onClick}>Foo</Button>
            ));
            const confirmation = wrapper.find('.uir-button-confirmation');

            wrapper.simulate('click');
            confirmation.simulate('click');
            expect(onClick).to.have.been.calledOnce();
        });

        describe('confirmText', () => {
            it('shows default text', () => {
                const wrapper = mount(defaultConfirmButton);

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

            it('does not show default confirmed text', () => {
                const wrapper = mount(defaultConfirmButton);

                wrapper.simulate('click');
                expect(wrapper).not.to.contain.text('Cool!');
            });
        });

        describe('confirmedText', () => {
            it('shows default text', () => {
                const wrapper = mount(defaultConfirmButton);
                const confirmation = wrapper.find('.uir-button-confirmation');

                wrapper.simulate('click');
                confirmation.simulate('click');

                expect(wrapper).to.contain.text('Cool!');
            });

            it('shows custom text', () => {
                const wrapper = mount((
                    <Button hasConfirm confirmedText="BarBaz!" onClick={() => {}}>Foo</Button>
                ));
                const confirmation = wrapper.find('.uir-button-confirmation');

                wrapper.simulate('click');
                confirmation.simulate('click');

                expect(wrapper).to.contain.text('BarBaz!');
            });

            it('does not show default confirming text', () => {
                const wrapper = mount(defaultConfirmButton);
                const confirmation = wrapper.find('.uir-button-confirmation');

                wrapper.simulate('click');
                confirmation.simulate('click');

                expect(wrapper).not.to.contain.text('Confirm?');
            });
        });

        describe('onBlur', () => {
            it('cancels confirmation on loss of focus', () => {
                const wrapper = mount(defaultConfirmButton);
                const confirmation = wrapper.find('.uir-button-confirmation');

                wrapper.simulate('click');

                expect(confirmation).to.have.className('uir-button-confirmation--confirming');

                confirmation.simulate('blur');

                expect(wrapper).not.to.contain.text('Confirm?');
                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
            });

            // This test is a bit redundant but required to achieve 100% coverage
            it('does nothing on loss of focus after full interaction', () => {
                const wrapper = mount(defaultConfirmButton);
                const confirmation = wrapper.find('.uir-button-confirmation');

                wrapper.simulate('click');
                confirmation.simulate('click');

                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');

                confirmation.simulate('blur');

                expect(wrapper).not.to.contain.text('Confirm?');
                expect(confirmation).not.to.have.className('uir-button-confirmation--confirming');
            });
        });
    });

    describe('icon', () => {
        it('does not contain an icon by default', () => {
            const wrapper = mount(defaultButton);

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

    describe('id', () => {
        it('does not set id attribute by default', () => {
            const wrapper = shallow(defaultButton);

            expect(wrapper).not.to.have.attr('id');
        });

        it('sets id attribute', () => {
            const wrapper = shallow(<Button id="test-id-123" onClick={() => {}}>Foo</Button>);

            expect(wrapper).to.have.attr('id', 'test-id-123');
        });
    });

    describe('isDisabled', () => {
        it('does not set disabled attribute by default', () => {
            const wrapper = shallow(defaultButton);

            expect(wrapper).not.to.have.attr('disabled');
        });

        it('sets disabled attribute', () => {
            const wrapper = shallow(<Button isDisabled onClick={() => {}}>Foo</Button>);

            expect(wrapper).to.have.attr('disabled');
        });
    });

    describe('onClick', () => {
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

    describe('tabIndex', () => {
        it('does not set tabindex by default', () => {
            const wrapper = shallow(defaultButton);

            expect(wrapper).not.to.have.attr('tabindex');
        });

        it('sets tabindex', () => {
            const wrapper = shallow(<Button tabIndex={-1} onClick={() => {}}>Foo</Button>);

            expect(wrapper).to.have.attr('tabindex', '-1');
        });
    });

    describe('type', () => {
        function testTypeProp(propValue) {
            describe(propValue, () => {
                it(`sets type to ${propValue}`, () => {
                    const wrapper = shallow((
                        <Button type={propValue} onClick={() => {}}>Foo</Button>
                    ));

                    expect(wrapper).to.have.attr('type', propValue);
                });
            });
        }

        it('sets type to button by default', () => {
            const wrapper = shallow(defaultButton);

            expect(wrapper).to.have.attr('type', 'button');
        });

        testTypeProp('button');
        testTypeProp('reset');
        testTypeProp('submit');
    });

    describe('variant', () => {
        // This could be extracted
        // into a generic test for propKey+propValue that result in className
        function testVariantProp(propValue) {
            describe(propValue, () => {
                const className = `uir-button--${propValue}`;

                it(`does not add className ${className} when prop not defined`, () => {
                    const wrapper = shallow(<Button onClick={() => {}}>Foo</Button>);

                    expect(wrapper).not.to.have.className(className);
                });

                it(`adds className ${className}`, () => {
                    const wrapper = shallow((
                        <Button variant={propValue} onClick={() => {}}>Foo</Button>
                    ));

                    expect(wrapper).to.have.className(className);
                });
            });
        }

        testVariantProp('clear');
        testVariantProp('primary');
        testVariantProp('round');
    });
});
