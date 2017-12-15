/* global describe, expect, it, shallow */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import DemoComponent from './DemoComponent';

describe('DemoComponent', () => {
    common.rendersChildren(DemoComponent);

    it('renders a div by default', () => {
        const wrapper = shallow((
            <DemoComponent />
        ));

        expect(wrapper).to.have.tagName('div');
    });

    describe('title', () => {
        it('renders default title text', () => {
            const wrapper = shallow((
                <DemoComponent />
            ));

            expect(wrapper.find('.ui-demo-component--title')).to.have.text('Demo');
        });

        it('renders provided title text', () => {
            const wrapper = shallow((
                <DemoComponent title="Test title text!" />
            ));

            expect(wrapper.find('.ui-demo-component--title')).to.have.text('Test title text!');
        });
    });

    describe('isDisabled', () => {
        it('does not add is-disabled class by default', () => {
            const wrapper = shallow((
                <DemoComponent />
            ));

            expect(wrapper).not.to.have.className('is-disabled');
        });

        it('adds is-disabled class', () => {
            const wrapper = shallow((
                <DemoComponent isDisabled />
            ));

            expect(wrapper).to.have.className('is-disabled');
        });
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <DemoComponent />
            ));
            const clickComponent = () => {
                wrapper.simulate('click', syntheticEvent);
            };

            expect(clickComponent).not.to.throw();
        });

        it('is called when clicked', () => {
            const sandbox = sinon.sandbox.create();
            const onClick = sandbox.spy();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <DemoComponent onClick={onClick} />
            ));

            wrapper.simulate('click', syntheticEvent);
            expect(onClick).to.have.been.calledOnce();
            expect(onClick).to.have.been.calledWithExactly(syntheticEvent);
        });
    });
});
