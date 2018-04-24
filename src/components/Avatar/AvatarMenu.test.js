/* global describe, expect, it, shallow, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import AvatarMenu from './AvatarMenu';

describe('AvatarMenu', () => {
    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.isConformant(AvatarMenu, { requiredProps: {} });

    // it('complains if user name is not provided', () => {
    //     shallow(<AvatarMenu />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error).to.be.called();
    // });

    // it('renders', () => {
    //     const avatarMenu = shallow(<AvatarMenu />);
    //     expect(avatarMenu).to.be.a('function');
    // });

    // const mockUser = new User();
    // mockUser.name = 'Katrina Scott';
    // mockUser.avatar = 'https://randomuser.me/api/portraits/women/79.jpg';
    //
    // it('renders with correct class', () => {
    //     const avatarMenu = shallow(<AvatarMenu user={mockUser} />);
    //     expect(avatarMenu.hasClass('avatar-menu')).toBe(true);
    // });
    //
    // it('renders with Avatar', () => {
    //     const avatarMenu = shallow(<AvatarMenu user={mockUser} />);
    //     expect(avatarMenu.find(Avatar).length).toBe(1);
    // });
    //
    // it('default open state is false', () => {
    //     const avatarMenu = shallow(<AvatarMenu user={mockUser} />);
    //     expect(avatarMenu.state('open')).toBe(false);
    // });
    //
    // it('default open state can be set by prop', () => {
    //     const avatarMenu = shallow(<AvatarMenu open user={mockUser} />);
    //     expect(avatarMenu.state('open')).toBe(true);
    // });
    //
    // it('click the Avatar toggles open state to true', () => {
    //     const avatarMenu = shallow(<AvatarMenu user={mockUser} />);
    //     expect(avatarMenu.state('open')).toBe(false);
    //     avatarMenu.find(Avatar).simulate('click');
    //     expect(avatarMenu.state('open')).toBe(true);
    // });
    //
    // it('click the Avatar toggles open state to false', () => {
    //     const avatarMenu = shallow(<AvatarMenu open user={mockUser} />);
    //     expect(avatarMenu.state('open')).toBe(true);
    //     avatarMenu.find(Avatar).simulate('click');
    //     expect(avatarMenu.state('open')).toBe(false);
    // });
    //
    // it('open state addeds --open class', () => {
    //     const avatarMenu = shallow(<AvatarMenu open user={mockUser} />);
    //     expect(avatarMenu.hasClass('avatar-menu--open')).toBe(true);
    // });
    //
    // it('can handle clicking nav elements', () => {
    //     const avatarMenu = mount(<AvatarMenu
    //         onMenuItemClick={path => expect(typeof path === 'string').toBe(true)}
    //         open
    //         user={mockUser}
    //     />);
    //     avatarMenu.find(Button).first().simulate('click');
    //     avatarMenu.find('span').first().simulate('click');
    // });
    //
    // it('can handle clicking nav elements without prop', () => {
    //     const avatarMenu = mount(<AvatarMenu open user={mockUser} />);
    //     expect(() => {
    //         avatarMenu.find(Button).first().simulate('click');
    //     }).not.toThrow();
    // });
});
