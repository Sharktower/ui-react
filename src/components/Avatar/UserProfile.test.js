/* global expect, it, beforeEach, afterEach  */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';
import UserProfile from './UserProfile';

configure({ adapter: new Adapter() });

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
    const userProfile = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(userProfile.find('div').length).to.equal(1);
});

it('has a class of uir-avatar-user-profile', () => {
    const userProfile = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(userProfile.find('div').at(0).hasClass('uir-avatar-user-profile')).to.equal(true);
});

it('can display user initials', () => {
    const userProfile = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(userProfile.find('div').at(0).text()).to.equal(sampleData.initials);
});

it('can display user profile image', () => {
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(userProfile.find('img').length).to.equal(1);
    expect(userProfile.find('img').props()).to.have.property('src', sampleData.profileImage);
});

it('does NOT display initials if profile image is shown', () => {
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(userProfile.find('div').at(1).text()).to.equal('');
});

it('has aria-label with user name', () => {
    const userProfile = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(userProfile.find('div').at(0).props()).to.have.property('aria-label', `${sampleData.name} avatar`);
});

it('render light theme by default', () => {
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
    />);
    const hasClass = userProfile.find('div').at(0).hasClass('uir-avatar-user-profile-light');
    expect(hasClass).to.equal(true);
});

function testComponentTheme(theme) {
    it(`can render a ${theme} version`, () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            initials={sampleData.initials}
            theme={theme}
        />);
        const hasClass = userProfile.find('div').at(0).hasClass(`uir-avatar-user-profile-${theme}`);
        expect(hasClass).to.equal(true);
    });
}

testComponentTheme('light');
testComponentTheme('dark');

function testComponentSize(size, label) {
    it(`can render a ${size} version`, () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            initials={sampleData.initials}
            size={label}
        />);
        const hasClass = userProfile.find('div').at(0).hasClass(`uir-avatar-user-profile-${label}`);
        expect(hasClass).to.equal(true);
    });
}

testComponentSize('small', 'sm');
testComponentSize('medium', 'md');
testComponentSize('large', 'lg');

it('can display a notification icon', () => {
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        notification
    />);
    expect(userProfile.find('span').at(1).hasClass('uir-avatar-user-status'))
        .to.equal(true);
    expect(userProfile.find('svg').length).to.equal(1);
});

it('can display a status icon', () => {
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        status="🤓"
    />);
    const span = userProfile.find('span').at(1);
    expect(span.hasClass('uir-avatar-user-status')).to.equal(true);
    expect(span.text()).to.equal('🤓');
});

it('can trigger click handler', () => {
    const onClickSpy = sinon.spy();
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        onClick={onClickSpy}
    />);
    userProfile.find('div').at(0).simulate('click');
    expect(onClickSpy.calledOnce).to.equal(true);
});

it('does nothing when clicked if clickHandle undefined', () => {
    const onClickSpy = sinon.spy();
    const userProfile = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
    />);
    userProfile.find('div').at(0).simulate('click');
    expect(onClickSpy.notCalled).to.equal(true);
});

it('complains if user name is not provided', () => {
    shallow(<UserProfile initials={sampleData.initials} />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('The prop `name` is marked as required in `UserProfile`')).to.equal(true);
});

it('complains if initials are not provided', () => {
    shallow(<UserProfile name={sampleData.name} />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('The prop `initials` is marked as required in `UserProfile`')).to.equal(true);
});

it('complains if initials longer than 2 characters are used', () => {
    shallow(<UserProfile name={sampleData.name} initials="MPD" />);
    // eslint-disable-next-line no-console
    expect(console.error.calledWithMatch('Initials supplied to `UserProfile` should be 1 or 2 characters')).to.equal(true);
});
