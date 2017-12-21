/* global describe, expect, it, shallow  */
import React from 'react';
import Avatar from './Avatar';
import AvatarTitle from './AvatarTitle';

const exampleAvatar = (
    <Avatar
        name="David Smith"
        src="https://randomuser.me/api/portraits/men/30.jpg"
        size="lg"
    />
);

const exampleUser = {
    name: 'David Smith',
    jobRole: 'Sales Manager',
    team: 'Communication Team',
};

describe('AvatarTitle', () => {
    it('renders div elements', () => {
        const avatarCard = shallow(<AvatarTitle />);
        expect(avatarCard.find('div').length).to.equal(3);
    });

    it('has correct class', () => {
        const avatarCard = shallow(<AvatarTitle />);
        expect(avatarCard.find('div').at(0).hasClass('uir-avatar-title'))
            .to.equal(true);
    });

    it('can display name', () => {
        const avatarCard = shallow(<AvatarTitle name={exampleUser.name} />);
        expect(avatarCard.find('div.uir-avatar-title-name').text())
            .to.equal(exampleUser.name);
    });

    it('can display job role', () => {
        const avatarCard = shallow(<AvatarTitle
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
        />);
        expect(avatarCard.find('div.uir-avatar-title-job-role').text())
            .to.equal(exampleUser.jobRole);
    });

    it('can display avatar', () => {
        const avatarCard = shallow(<AvatarTitle
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
            team={exampleUser.team}
            avatar={exampleAvatar}
        />);
        expect(avatarCard.find(Avatar).length).to.equal(1);
    });

    it('can pass through style object', () => {
        const style = { width: '10%' };
        const avatarCard = shallow(<AvatarTitle style={style} />);
        expect(avatarCard.props()).to.have.property('style', style);
    });

    // @TODO: complains if name is undefined
});
