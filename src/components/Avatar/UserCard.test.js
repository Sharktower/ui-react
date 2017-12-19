/* global describe, expect, it, shallow  */
import React from 'react';
import UserCard from './UserCard';
import UserProfile from './UserProfile';
import UserCardTooltip from './UserCardTooltip';

describe('UserCard', () => {
    it('renders a div element', () => {
        const userCard = shallow(<UserCard />);
        expect(userCard.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const userCard = shallow(<UserCard />);
        expect(userCard.find('div').at(0).hasClass('uir-avatar-user-card'))
            .to.equal(true);
    });

    it('can render user profile', () => {
        const userProfile = <UserProfile name="Matt" />;
        const userCard = shallow(<UserCard profile={userProfile} />);
        expect(userCard.find(UserProfile).length).to.equal(1);
    });

    it('tooltip is hidden by default', () => {
        const userProfile = <UserProfile name="Matt" />;
        const userCard = shallow(<UserCard profile={userProfile} />);
        expect(userCard.find(UserCardTooltip).length).to.equal(0);
    });

    it('displays tooltip when showTooltip state is true', () => {
        const userCard = shallow(<UserCard />);
        userCard.setState({ showTooltip: true });
        expect(userCard.find(UserCardTooltip).length).to.equal(1);
    });

    it('displays tooltip when showTooltip state is false', () => {
        const userCard = shallow(<UserCard />);
        userCard.setState({ showTooltip: false });
        expect(userCard.find(UserCardTooltip).length).to.equal(0);
    });

    it('allows user to override and show tooltip', () => {
        const userCard = shallow(<UserCard showTooltip />);
        expect(userCard.find(UserCardTooltip).length).to.equal(1);
    });

    it('allows user to override and hide tooltip', () => {
        const userCard = shallow(<UserCard showTooltip={false} />);
        expect(userCard.find(UserCardTooltip).length).to.equal(0);
    });

    it('tooltip displays children elements', () => {
        const contents = 'example text';
        const userCard = shallow(<UserCard>{contents}</UserCard>);
        userCard.setState({ showTooltip: true });
        expect(userCard.find(UserCardTooltip).children().text()).to.equal(contents);
    });

    it('sets showTooltip state to true on mouseEnter', () => {
        const userProfile = shallow(<UserCard />);
        userProfile.find('div').at(0).simulate('mouseEnter');
        expect(userProfile.state()).to.have.property('showTooltip', true);
    });

    it('sets showTooltip state to false on mouseLeave', () => {
        const userProfile = shallow(<UserCard />);
        userProfile.find('div').at(0).simulate('mouseLeave');
        expect(userProfile.state()).to.have.property('showTooltip', false);
    });
});
