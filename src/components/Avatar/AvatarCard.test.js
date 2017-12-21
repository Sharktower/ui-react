/* global describe, expect, it, shallow  */
import React from 'react';
import Avatar from './Avatar';
import AvatarCard from './AvatarCard';

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

describe('AvatarCard', () => {
    it('renders div elements', () => {
        const avatarCard = shallow(<AvatarCard />);
        expect(avatarCard.find('div').length).to.equal(3);
    });

    it('has correct class', () => {
        const avatarCard = shallow(<AvatarCard />);
        expect(avatarCard.find('div').at(0).hasClass('uir-avatar-card'))
            .to.equal(true);
    });

    it('can display name', () => {
        const avatarCard = shallow(<AvatarCard name={exampleUser.name} />);
        expect(avatarCard.find('div.uir-avatar-card-name').text())
            .to.equal(exampleUser.name);
    });

    it('can display job role', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
        />);
        expect(avatarCard.find('div.uir-avatar-card-job-role').text())
            .to.equal(exampleUser.jobRole);
    });

    it('can display team', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
            team={exampleUser.team}
        />);
        expect(avatarCard.find('div.uir-avatar-card-team').text())
            .to.equal(exampleUser.team);
    });

    it('can display avatar', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
            team={exampleUser.team}
            avatar={exampleAvatar}
        />);
        expect(avatarCard.find(Avatar).length).to.equal(1);
    });

    it('can pass through style object', () => {
        const style = { width: '10%' };
        const avatarCard = shallow(<AvatarCard style={style} />);
        expect(avatarCard.props()).to.have.property('style', style);
    });

    // @TODO: complains if name is undefined
});
