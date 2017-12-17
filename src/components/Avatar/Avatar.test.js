/* global expect, it, beforeEach, afterEach  */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Avatar from './Avatar';

const sandbox = sinon.sandbox.create();

beforeEach(() => {
    sandbox.stub(console, 'error');
});

afterEach(() => {
    sandbox.restore();
});

const sampleData = {
    name: 'Matt Davies',
    initials: 'MD',
    profileImage: 'https://randomuser.me/api/portraits/lego/2.jpg',
};

it('renders a div element', () => {
    const avatar = shallow(<Avatar name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').length).toBe(1);
});

it('has a class of uir-avatar', () => {
    const avatar = shallow(<Avatar name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').hasClass('uir-avatar')).toBe(true);
});

it('can display user initials', () => {
    const avatar = shallow(<Avatar name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').text()).toBe(sampleData.initials);
});

it('can display user profile image', () => {
    const avatar = shallow(<Avatar
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(avatar.find('img').length).toBe(1);
    expect(avatar.find('img').props()).toHaveProperty('src', sampleData.profileImage);
});

it('does NOT display initials if profile image is shown', () => {
    const avatar = shallow(<Avatar
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(avatar.find('div').text()).toBe('');
});

it('has aria-label with user name', () => {
    const avatar = shallow(<Avatar name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').props()).toHaveProperty('aria-label', `${sampleData.name} avatar`);
});

it('displays a notification count icon', () => {
    const avatar = shallow(<Avatar
        name={sampleData.name}
        initials={sampleData.initials}
        notificationCount={2}
    />);
    expect(avatar.find('span').length).toBe(1);
    expect(avatar.find('span').hasClass('notification-count')).toBe(true);
});

function testComponentSize(size, label) {
    it(`can render a ${size} version`, () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            initials={sampleData.initials}
            size={label}
        />);
        expect(avatar.find('div').hasClass(`uir-avatar-${label}`)).toBe(true);
    });
}

testComponentSize('small', 'sm');
testComponentSize('medium', 'md');
testComponentSize('large', 'lg');

it('can trigger click handler', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<Avatar
        name={sampleData.name}
        initials={sampleData.initials}
        onClick={onClickSpy}
    />);
    wrapper.find('div').simulate('click');
    expect(onClickSpy.calledOnce).toBe(true);
});

it('complains if user name is not provided', () => {
    shallow(<Avatar initials={sampleData.initials} />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('The prop `name` is marked as required in `Avatar`')).toBe(true);
});

it('complains if initials are not provided', () => {
    shallow(<Avatar name={sampleData.name} />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('The prop `initials` is marked as required in `Avatar`')).toBe(true);
});

it('complains if initials longer than 2 characters are used', () => {
    shallow(<Avatar name={sampleData.name} initials="MPD" />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('Initials supplied to `Avatar` should be 1 or 2 characters')).toBe(true);
});
