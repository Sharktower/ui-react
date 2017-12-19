/* global describe, expect, it, shallow */
import React from 'react';
import UserCardTooltip from './UserCardTooltip';

describe('UserCardTooltip', () => {
    it('renders a div element', () => {
        const userCardTooltip = shallow(<UserCardTooltip>contents</UserCardTooltip>);
        expect(userCardTooltip.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const userCardTooltip = shallow(<UserCardTooltip>contents</UserCardTooltip>);
        expect(userCardTooltip.find('div').hasClass('uir-avatar-user-card-toolip'))
            .to.equal(true);
    });

    it('can past in children props', () => {
        const contents = 'this is an example';
        const userCardTooltip = shallow(<UserCardTooltip>{contents}</UserCardTooltip>);
        expect(userCardTooltip.find('div').text()).to.equal(contents);
    });

    // it('complains if chidlren not provided', () => {
    //     shallow(<UserCardTooltip />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('The prop `children` is marked as required in `UserCardTooltip`')).to.equal(true);
    // });
});
