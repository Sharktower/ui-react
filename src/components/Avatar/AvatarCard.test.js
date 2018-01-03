/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import Avatar from './Avatar';
import AvatarCard from './AvatarCard';

describe('AvatarCard', () => {
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

    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('complains if user name is not provided', () => {
        shallow(<AvatarCard />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('The prop `name` is marked as required in `AvatarCard`');
    });

    it('renders div elements', () => {
        const avatarCard = shallow(<AvatarCard />);
        expect(avatarCard.find('div').length).to.equal(3);
    });

    it('has correct class', () => {
        const avatarCard = shallow(<AvatarCard />);
        expect(avatarCard).to.have.className('uir-avatar-card');
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            className={exampleClassName}
        />);
        expect(avatarCard).to.have.className(exampleClassName);
    });

    it('can display name', () => {
        const avatarCard = shallow(<AvatarCard name={exampleUser.name} />);
        expect(avatarCard.find('div.uir-avatar-card-name')).to.have.text(exampleUser.name);
    });

    it('can display job role', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
        />);
        expect(avatarCard.find('div.uir-avatar-card-job-role')).to.have.text(exampleUser.jobRole);
    });

    it('adds class when role provided', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
        />);
        expect(avatarCard).to.have.className('uir-avatar-card--has-role');
    });

    it('can display team', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
            team={exampleUser.team}
        />);
        expect(avatarCard.find('div.uir-avatar-card-team')).to.have.text(exampleUser.team);
    });

    it('adds class when team provided', () => {
        const avatarCard = shallow(<AvatarCard
            name={exampleUser.name}
            team={exampleUser.team}
        />);
        expect(avatarCard).to.have.className('uir-avatar-card--has-team');
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
});
