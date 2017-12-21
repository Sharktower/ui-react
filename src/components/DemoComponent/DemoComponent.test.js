/* global describe, expect, it, shallow */
import React from 'react';
import * as common from '../../../test/unit/commonTests';
import { sandbox } from '../../../test/unit/utils';
import DemoComponent from './DemoComponent';

const syntheticEvent = { preventDefault: () => undefined };

describe('DemoComponent', () => {
    common.rendersChildren(DemoComponent);
    common.propKeyToClassName(DemoComponent, 'isDisabled');

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

            expect(wrapper.find('.uir-demo-component--title')).to.have.text('Demo');
        });

        it('renders provided title text', () => {
            const wrapper = shallow((
                <DemoComponent title="Test title text!" />
            ));

            expect(wrapper.find('.uir-demo-component--title')).to.have.text('Test title text!');
        });
    });

    describe('onClick', () => {
        it('default does not throw when clicked', () => {
            const wrapper = shallow((
                <DemoComponent />
            ));
            const clickComponent = () => {
                wrapper.simulate('click', syntheticEvent);
            };

            expect(clickComponent).not.to.throw();
        });

        it('is called when clicked', () => {
            const onClick = sandbox.spy();
            const wrapper = shallow((
                <DemoComponent onClick={onClick} />
            ));

            wrapper.simulate('click', syntheticEvent);

            expect(onClick).to.have.been.calledOnce();
            expect(onClick).to.have.been.calledWithExactly(syntheticEvent);
        });
    });
});
