/* global describe, document, expect, it, mount, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <Button>Foo</Button>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('renders with class .uir-Button', () => {
        const wrapper = shallow(<Button>Foo</Button>);

        expect(wrapper).to.have.className('uir-Button');
    });

    it('renders three Button components', () => {
        const wrapper = shallow((
            <div>
                <Button isActive>Foo</Button>
                <Button>Foo</Button>
                <Button isDisabled>Foo</Button>
            </div>
        ));

        expect(wrapper.find(Button).length).to.equal(3);
    });

    describe('handleRef', () => {
        it('can set focus via a ref', () => {
            const mountNode = document.createElement('div');
            document.body.appendChild(mountNode);

            const wrapper = mount(<Button>Foo</Button>, { attachTo: mountNode });
            wrapper.instance().innerRef.focus();

            const button = document.querySelector('button');

            expect(document.activeElement).to.equal(button);

            wrapper.detach();
            document.body.removeChild(mountNode);
        });
    });

    describe('isActive', () => {
        it('does not add class .uir-Button-active by default', () => {
            const wrapper = shallow(<Button>Foo</Button>);

            expect(wrapper).not.to.have.className('uir-Button-active');
        });

        it('adds class .uir-Button-active', () => {
            const wrapper = shallow(<Button isActive>Foo</Button>);

            expect(wrapper).to.have.className('uir-Button-active');
        });
    });

    describe('isClear', () => {
        it('does not add class .uir-Button-clear by default', () => {
            const wrapper = shallow(<Button>Foo</Button>);

            expect(wrapper).not.to.have.className('uir-Button-clear');
        });

        it('adds class .uir-Button-clear', () => {
            const wrapper = shallow(<Button isClear>Foo</Button>);

            expect(wrapper).to.have.className('uir-Button-clear');
        });
    });

    describe('isDisabled', () => {
        it('does not add class .uir-Button-disabled by default', () => {
            const wrapper = shallow(<Button>Foo</Button>);

            expect(wrapper).not.to.have.className('uir-Button-disabled');
        });

        it('adds class .uir-Button-disabled', () => {
            const wrapper = shallow(<Button isDisabled>Foo</Button>);

            expect(wrapper).to.have.className('uir-Button-disabled');
        });
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

        it('is not called when clicked on Disable button', () => {
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
});
