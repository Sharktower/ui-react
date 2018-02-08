/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import Avatar from './Avatar';
import AvatarTitle from './AvatarTitle';

describe('AvatarTitle', () => {
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

    common.rendersTag(AvatarTitle, 'div', { requiredProps: { name: exampleUser.name } });
    common.addsComponentClassName(AvatarTitle, { requiredProps: { name: exampleUser.name } });

    it('complains if user name is not provided', () => {
        shallow(<AvatarTitle />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.called();
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const avatarTitle = shallow(<AvatarTitle
            name={exampleUser.name}
            className={exampleClassName}
        />);
        expect(avatarTitle).to.have.className(exampleClassName);
    });

    it('can display name', () => {
        const avatarTitle = shallow(<AvatarTitle name={exampleUser.name} />);
        expect(avatarTitle.find('div.uir-avatar-title-name')).to.have.text(exampleUser.name);
    });

    it('can display job role', () => {
        const avatarTitle = shallow(<AvatarTitle
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
        />);
        expect(avatarTitle.find('div.uir-avatar-title-job-role')).to.have.text(exampleUser.jobRole);
    });

    it('can display avatar', () => {
        const avatarTitle = shallow(<AvatarTitle
            name={exampleUser.name}
            jobRole={exampleUser.jobRole}
            team={exampleUser.team}
            avatar={exampleAvatar}
        />);
        expect(avatarTitle.find(Avatar).length).to.equal(1);
    });

    it('can pass through style object', () => {
        const style = { width: '10%' };
        const avatarTitle = shallow(<AvatarTitle style={style} />);
        expect(avatarTitle.props()).to.have.property('style', style);
    });
});
