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
    const avatar = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').length).to.equal(1);
});

it('has a class of uir-avatar', () => {
    const avatar = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').at(0).hasClass('uir-avatar')).to.equal(true);
});

it('can display user initials', () => {
    const avatar = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').at(0).text()).to.equal(sampleData.initials);
});

it('can display user profile image', () => {
    const avatar = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(avatar.find('img').length).to.equal(1);
    expect(avatar.find('img').props()).to.have.property('src', sampleData.profileImage);
});

it('does NOT display initials if profile image is shown', () => {
    const avatar = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        profileImage={sampleData.profileImage}
    />);
    expect(avatar.find('div').at(1).text()).to.equal('');
});

it('has aria-label with user name', () => {
    const avatar = shallow(<UserProfile name={sampleData.name} initials={sampleData.initials} />);
    expect(avatar.find('div').at(0).props()).to.have.property('aria-label', `${sampleData.name} avatar`);
});

function testComponentSize(size, label) {
    it(`can render a ${size} version`, () => {
        const avatar = shallow(<UserProfile
            name={sampleData.name}
            initials={sampleData.initials}
            size={label}
        />);
        expect(avatar.find('div').at(0).hasClass(`uir-avatar-${label}`)).to.equal(true);
    });
}

testComponentSize('small', 'sm');
testComponentSize('medium', 'md');
testComponentSize('large', 'lg');

it('can trigger click handler', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
        onClick={onClickSpy}
    />);
    wrapper.find('div').at(0).simulate('click');
    expect(onClickSpy.calledOnce).to.equal(true);
});

it('does nothing when clicked if clickHandle undefined', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<UserProfile
        name={sampleData.name}
        initials={sampleData.initials}
    />);
    wrapper.find('div').at(0).simulate('click');
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
