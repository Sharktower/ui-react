/* global describe, expect, it, jest, shallow */
import React from 'react';
import * as common from '../../../test/jest/commonTests';
import Button from './Button';

describe('Button', () => {
    common.rendersChildren(Button);

    it('renders a button by default', () => {
        const wrapper = shallow((
            <Button />
        ));

        expect(wrapper).toHaveTagName('button');
    });

    it('renders an anchor if href present', () => {
        const wrapper = shallow((
            <Button href="https://mudano.com" />
        ));

        expect(wrapper).toHaveTagName('a');
    });

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
