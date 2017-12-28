/* global describe, expect, it, shallow, mount, beforeEach, afterEach  */
import React from 'react';
import sinon from 'sinon';
import Avatar from './Avatar';

describe('Avatar', () => {
    const sampleData = {
        name: 'Matt Davies',
        src: 'https://randomuser.me/api/portraits/lego/2.jpg',
    };

    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('complains if name is not provided', () => {
        shallow(<Avatar />);
        // eslint-disable-next-line no-console
        expect(console.error.calledWithMatch('The prop `name` is marked as required in `Avatar`')).to.equal(true);
    });

    it('complains if initials longer than 2 characters are used', () => {
        shallow(<Avatar name={sampleData.name} initials="MPD" />);
        // eslint-disable-next-line no-console
        expect(console.error.calledWithMatch('Initials supplied to `Avatar` should be 1 or 2 characters')).to.equal(true);
    });

    it('renders a div element', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar.find('div').at(0).hasClass('uir-avatar')).to.equal(true);
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const avatar = shallow(<Avatar name={sampleData.name} className={exampleClassName} />);
        expect(avatar.find('div').at(0).hasClass(exampleClassName)).to.equal(true);
    });

    it('calculates initials from name', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar.find('div').at(0).text()).to.equal('MD');
    });

    it('can override user initials', () => {
        const initials = 'FF';
        const avatar = shallow(<Avatar name={sampleData.name} initials={initials} />);
        expect(avatar.find('div').at(0).text()).to.equal(initials);
    });

    it('initials are question mark if no name is provided', () => {
        const avatar = shallow(<Avatar />);
        expect(avatar.find('div').at(0).text()).to.equal('?');
    });

    it('can display user profile image', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            src={sampleData.src}
        />);
        expect(avatar.find('img').length).to.equal(1);
        expect(avatar.find('img').props()).to.have.property('src', sampleData.src);
    });

    it('does NOT display initials if profile image is shown', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            src={sampleData.src}
        />);
        expect(avatar.find('div').at(1).text()).to.equal('');
    });

    it('has ariaLabel with user name', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
        />);
        expect(avatar.find('div').at(0).props()).to.have.property('aria-label', sampleData.name);
    });

    it('can have a tabIndex', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            tabIndex={-1}
        />);
        expect(avatar.find('div').at(0).props()).to.have.property('tabIndex', -1);
    });

    it('render light theme by default', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
        />);
        const hasClass = avatar.find('div').at(0).hasClass('uir-avatar--light');
        expect(hasClass).to.equal(true);
    });

    function testComponentTheme(theme) {
        it(`can render a ${theme} version`, () => {
            const avatar = shallow(<Avatar
                name={sampleData.name}
                theme={theme}
            />);
            const hasClass = avatar.find('div').at(0).hasClass(`uir-avatar--${theme}`);
            expect(hasClass).to.equal(true);
        });
    }

    testComponentTheme('light');
    testComponentTheme('dark');

    function testComponentSize(size, label) {
        it(`can render a ${size} version`, () => {
            const avatar = shallow(<Avatar
                name={sampleData.name}
                size={label}
            />);
            const hasClass = avatar.find('div').at(0).hasClass(`uir-avatar--${label}`);
            expect(hasClass).to.equal(true);
        });
    }

    testComponentSize('small', 'xs');
    testComponentSize('small', 'sm');
    testComponentSize('medium', 'md');
    testComponentSize('large', 'lg');

    it('can display a halo around the avatar', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            hasHalo
        />);
        const hasClass = avatar.find('div').at(0).hasClass('uir-avatar--halo');
        expect(hasClass).to.equal(true);
    });

    it('can display a notification icon', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            hasNotification
        />);
        expect(avatar.find('span').at(1).hasClass('uir-avatar-user-status'))
            .to.equal(true);
        expect(avatar.find('svg').length).to.equal(1);
    });

    it('can display a status icon', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            status="🤓"
        />);
        const span = avatar.find('span').at(1);
        expect(span.hasClass('uir-avatar-user-status')).to.equal(true);
        expect(span.text()).to.equal('🤓');
    });

    it('can pass through style object', () => {
        const style = { width: '10%' };
        const avatarCard = shallow(<Avatar
            name={sampleData.name}
            style={style}
        />);
        expect(avatarCard.props()).to.have.property('style', style);
    });

    it('triggers click handler when clicked', () => {
        const onClickSpy = sinon.spy();
        const avatar = mount(<Avatar
            name={sampleData.name}
            onClick={onClickSpy}
        />);
        avatar.find('div').at(0).simulate('click');
        expect(onClickSpy.calledOnce).to.equal(true);
    });

    it('does nothing when clicked if clickHandle undefined', () => {
        const onClickSpy = sinon.spy();
        const avatar = shallow(<Avatar
            name={sampleData.name}
        />);
        avatar.find('div').at(0).simulate('click');
        expect(onClickSpy.notCalled).to.equal(true);
    });
});
