/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);
    common.propKeyToClassName(Button, 'isActive', { requiredProps: { children: 'Foo' } });
    common.propKeyToClassName(Button, 'isClear', { requiredProps: { children: 'Foo' } });
    common.propKeyToClassName(Button, 'isDisabled', { requiredProps: { children: 'Foo' } });
    common.propKeyToClassName(Button, 'isFluid', { requiredProps: { children: 'Foo' } });

    it('renders an HTML tag button', () => {
        const wrapper = shallow((
            <Button>Foo</Button>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('renders with class .uir-button', () => {
        const wrapper = shallow(<Button>Foo</Button>);

        expect(wrapper).to.have.className('uir-button');
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

    describe('isDisabled', () => {
        it('does not add disabled attribute when not defined', () => {
            const wrapper = shallow(<Button>Foo</Button>);

            expect(wrapper).not.to.have.attr('disabled');
        });

        it('adds disabled attribute', () => {
            const wrapper = shallow(<Button isDisabled>Foo</Button>);

            expect(wrapper).to.have.attr('disabled');
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
});
