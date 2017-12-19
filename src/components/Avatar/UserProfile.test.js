/* global describe, expect, it, shallow  */
import React from 'react';
import sinon from 'sinon';
import UserProfile from './UserProfile';

const sampleData = {
    name: 'Matt Davies',
    profileImage: 'https://randomuser.me/api/portraits/lego/2.jpg',
};

describe('UserProfile', () => {
    it('renders a div element', () => {
        const userProfile = shallow(<UserProfile name={sampleData.name} />);
        expect(userProfile.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const userProfile = shallow(<UserProfile name={sampleData.name} />);
        expect(userProfile.find('div').at(0).hasClass('uir-avatar-user-profile')).to.equal(true);
    });

    it('calculates initials from name', () => {
        const userProfile = shallow(<UserProfile name={sampleData.name} />);
        expect(userProfile.find('div').at(0).text()).to.equal('MD');
    });

    it('can override user initials', () => {
        const initials = 'FF';
        const userProfile = shallow(<UserProfile name={sampleData.name} initials={initials} />);
        expect(userProfile.find('div').at(0).text()).to.equal(initials);
    });

    it('can display user profile image', () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            profileImage={sampleData.profileImage}
        />);
        expect(userProfile.find('img').length).to.equal(1);
        expect(userProfile.find('img').props()).to.have.property('src', sampleData.profileImage);
    });

    it('does NOT display initials if profile image is shown', () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            profileImage={sampleData.profileImage}
        />);
        expect(userProfile.find('div').at(1).text()).to.equal('');
    });

    it('has aria-label with user name', () => {
        const userProfile = shallow(<UserProfile name={sampleData.name} />);
        expect(userProfile.find('div').at(0).props()).to.have.property('aria-label', `${sampleData.name} avatar`);
    });

    it('render light theme by default', () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
        />);
        const hasClass = userProfile.find('div').at(0).hasClass('uir-avatar-user-profile-light');
        expect(hasClass).to.equal(true);
    });

    function testComponentTheme(theme) {
        it(`can render a ${theme} version`, () => {
            const userProfile = shallow(<UserProfile
                name={sampleData.name}
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
            notification
        />);
        expect(userProfile.find('span').at(1).hasClass('uir-avatar-user-status'))
            .to.equal(true);
        expect(userProfile.find('svg').length).to.equal(1);
    });

    it('can display a status icon', () => {
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            status="🤓"
        />);
        const span = userProfile.find('span').at(1);
        expect(span.hasClass('uir-avatar-user-status')).to.equal(true);
        expect(span.text()).to.equal('🤓');
    });

    it('triggers click handler when clicked', () => {
        const onClickSpy = sinon.spy();
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
            onClick={onClickSpy}
        />);
        userProfile.find('div').at(0).simulate('click');
        expect(onClickSpy.calledOnce).to.equal(true);
    });

    it('does nothing when clicked if clickHandle undefined', () => {
        const onClickSpy = sinon.spy();
        const userProfile = shallow(<UserProfile
            name={sampleData.name}
        />);
        userProfile.find('div').at(0).simulate('click');
        expect(onClickSpy.notCalled).to.equal(true);
    });

    // it('complains if user name is not provided', () => {
    //     shallow(<UserProfile />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('The prop `name` is marked as required in `UserProfile`')).to.equal(true);
    // });

    // it('complains if initials longer than 2 characters are used', () => {
    //     shallow(<UserProfile name={sampleData.name} initials="MPD" />);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('Initials supplied to `UserProfile` should have 1 to 2 characters')).to.equal(true);
    // });
});
