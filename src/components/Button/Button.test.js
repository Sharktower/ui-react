/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);

    it('Button should render an HTML tag button', () => {
        const wrapper = shallow((
            <Button>Foo</Button>
        ));

        expect(wrapper).to.have.tagName('button');
    });

    it('Button should render with class .uir-Button', () => {
        const wrapper = shallow(<Button>Foo</Button>);
        expect(wrapper.find('.uir-Button').length).to.equal(1);
    });

    it('Clear button should render with class .uir-Button-clear', () => {
        const wrapper = shallow(<Button isClear>Foo</Button>);
        expect(wrapper.find('.uir-Button-clear').length).to.equal(1);
    });

    it('Disabled button should render with class .uir-Button-disabled', () => {
        const wrapper = shallow(<Button isDisabled>Foo</Button>);
        expect(wrapper.find('.uir-Button-disabled').length).to.equal(1);
    });

    it('Active button should render with class .uir-Button-active', () => {
        const wrapper = shallow(<Button isActive>Foo</Button>);
        expect(wrapper.find('.uir-Button-active').length).to.equal(1);
    });

    it('should render three Button components', () => {
        const wrapper = shallow((
            <div>
                <Button isActive>Foo</Button>
                <Button>Foo</Button>
                <Button isDisabled>Foo</Button>
            </div>
        ));
        expect(wrapper.find(Button).length).to.equal(3);
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
