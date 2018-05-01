/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../../test/unit/commonTests';
import AvatarMenuItem from './AvatarMenuItem';
import IconArrow from '../../Icon/IconArrow';

describe('AvatarMenuItem', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.isConformant(AvatarMenuItem, {
        tagName: 'li',
        requiredProps: {
        },
    });

    it('renders children text', () => {
        const avatarMenuItem = shallow((
            <AvatarMenuItem>Test Link</AvatarMenuItem>
        ));
        expect(avatarMenuItem.text()).to.equal('Test Link');
    });

    it('renders children div', () => {
        const avatarMenuItem = shallow((
            <AvatarMenuItem>
                <div>Test Link</div>
            </AvatarMenuItem>
        ));
        expect(avatarMenuItem.find('div').length).to.equal(1);
        expect(avatarMenuItem.text()).to.equal('Test Link');
    });

    it('renders icon with menu item', () => {
        const avatarMenuItem = shallow((
            <AvatarMenuItem icon={<IconArrow />}>Test Link</AvatarMenuItem>
        ));
        expect(avatarMenuItem.find('.uir-avatar-menu-nav-icon').length).to.equal(1);
        expect(avatarMenuItem.find(IconArrow).length).to.equal(1);
    });

    it('renders spacer with menu item', () => {
        const avatarMenuItem = shallow((
            <AvatarMenuItem hasSpacer>Test Link</AvatarMenuItem>
        ));
        expect(avatarMenuItem.find('.uir-avatar-menu-nav-spacer').length).to.equal(1);
    });

    it('handles click with click handler', () => {
        const onClickSpy = sinon.spy();
        const avatarMenuItem = shallow((
            <AvatarMenuItem onClick={onClickSpy}>Test Link</AvatarMenuItem>
        ));
        avatarMenuItem.find('span').simulate('click');
        expect(onClickSpy.calledOnce).to.equal(true);
    });

    it('accepts click with no handler', () => {
        const avatarMenuItem = shallow((
            <AvatarMenuItem>Test Link</AvatarMenuItem>
        ));
        avatarMenuItem.find('span').simulate('click');
        // eslint-disable-next-line no-console
        expect(console.error).to.not.be.called();
    });
});
