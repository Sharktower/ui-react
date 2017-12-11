/* global describe, expect, it, jest, shallow */
import React from 'react';
import * as common from '../../../test/jest/commonTests';
import DemoComponent from './DemoComponent';

describe('DemoComponent', () => {
    common.rendersChildren(DemoComponent);

    it('renders a div by default', () => {
        const wrapper = shallow((
            <DemoComponent />
        ));

        expect(wrapper).toHaveTagName('div');
    });

    describe('title', () => {
        it('renders default title text', () => {
            const wrapper = shallow((
                <DemoComponent />
            ));

            expect(wrapper.find('.ui-demo-component--title')).toHaveText('Demo');
        });

        it('renders provided title text', () => {
            const wrapper = shallow((
                <DemoComponent title="Test title text!" />
            ));

            expect(wrapper.find('.ui-demo-component--title')).toHaveText('Test title text!');
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

            expect(clickComponent).not.toThrow();
        });

        it('is called when clicked', () => {
            const onClick = jest.fn();
            const syntheticEvent = { preventDefault: () => undefined };
            const wrapper = shallow((
                <DemoComponent onClick={onClick} />
            ));

            wrapper.simulate('click', syntheticEvent);
            expect(onClick.mock.calls.length).toEqual(1);
            expect(onClick).toBeCalledWith(syntheticEvent);
        });
    });
});
