/* global describe, expect, it, shallow, mount, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import AvatarMenu from './AvatarMenu';
import Avatar from './Avatar';

const sampleData = {
    name: 'Matt Davies',
    src: 'https://randomuser.me/api/portraits/lego/2.jpg',
};

const renderMockMenu = () => shallow((
    <AvatarMenu avatar={<Avatar name={sampleData.name} src={sampleData.src} />}>
        <AvatarMenu.Nav />
        <AvatarMenu.Nav />
    </AvatarMenu>
));

describe('AvatarMenu', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.isConformant(AvatarMenu, {
        tagName: 'nav',
        requiredProps: {
            requiredProps: {
                name: sampleData.name,
                src: sampleData.src,
            },
        },
    });

    it('complains if user name is not provided', () => {
        shallow((
            <AvatarMenu>
                <AvatarMenu.Nav />
                <AvatarMenu.Nav />
            </AvatarMenu>
        ));
        // eslint-disable-next-line no-console
        expect(console.error).to.be.called();
    });

    it('complains if children are not provided', () => {
        shallow(<AvatarMenu name="Matthew Davies" />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.called();
    });

    it('renders with Avatar', () => {
        const avatarMenu = renderMockMenu();
        expect(avatarMenu.find(Avatar).length).to.equal(1);
    });

    it('sets open state to false by default', () => {
        const avatarMenu = renderMockMenu();
        expect(avatarMenu.state('open')).to.equal(false);
    });

    it('default open state can be set by prop', () => {
        const avatarMenu = shallow((
            <AvatarMenu avatar={<Avatar name={sampleData.name} />} open>
                <AvatarMenu.Nav />
                <AvatarMenu.Nav />
            </AvatarMenu>
        ));
        expect(avatarMenu.state('open')).to.equal(true);
    });

    it('click the Avatar toggles open state to true', () => {
        const avatarMenu = renderMockMenu();
        expect(avatarMenu.state('open')).to.equal(false);
        avatarMenu.find(Avatar).simulate('click');
        expect(avatarMenu.state('open')).to.equal(true);
    });

    it('click the Avatar toggles open state to false', () => {
        const avatarMenu = mount((
            <AvatarMenu avatar={<Avatar name={sampleData.name} />} open>
                <AvatarMenu.Nav />
                <AvatarMenu.Nav />
            </AvatarMenu>
        ));
        expect(avatarMenu.state('open')).to.equal(true);
        avatarMenu.find(Avatar).simulate('click');
        expect(avatarMenu.state('open')).to.equal(false);
    });

    it('does not have --open class by default', () => {
        const avatarMenu = renderMockMenu();
        expect(avatarMenu.hasClass('uir-avatar-menu--open')).to.equal(false);
    });

    it('open state adds --open class', () => {
        const avatarMenu = shallow((
            <AvatarMenu avatar={<Avatar name={sampleData.name} />} open>
                <AvatarMenu.Nav />
                <AvatarMenu.Nav />
            </AvatarMenu>
        ));
        expect(avatarMenu.hasClass('uir-avatar-menu--open')).to.equal(true);
    });

    it('click nav child item closes menu', () => {
        const avatarMenu = shallow((
            <AvatarMenu avatar={<Avatar name={sampleData.name} />} open>
                <AvatarMenu.Nav />
                <AvatarMenu.Nav />
            </AvatarMenu>
        ));
        expect(avatarMenu.state('open')).to.equal(true);
        avatarMenu.find(AvatarMenu.Nav).first().simulate('click');
        expect(avatarMenu.state('open')).to.equal(false);
    });
});
