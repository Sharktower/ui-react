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
        expect(console.error).to.be.calledWithMatch('The prop `name` is marked as required in `Avatar`');
    });

    it('complains if initials longer than 2 characters are used', () => {
        shallow(<Avatar name={sampleData.name} initials="MPD" />);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('Initials supplied to `Avatar` should be 1 or 2 characters');
    });

    it('renders a div element', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar).to.have.tagName('div');
    });

    it('has correct class', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar).to.have.className('uir-avatar');
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const avatar = shallow(<Avatar name={sampleData.name} className={exampleClassName} />);
        expect(avatar).to.have.className(exampleClassName);
    });

    it('calculates initials from name', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar).to.have.text('MD');
    });

    it('can override user initials', () => {
        const initials = 'FF';
        const avatar = shallow(<Avatar name={sampleData.name} initials={initials} />);
        expect(avatar).to.have.text(initials);
    });

    it('initials longer than 3 characters shortened to 2', () => {
        const initials = 'AAB';
        const avatar = shallow(<Avatar name={sampleData.name} initials={initials} />);
        expect(avatar).to.have.text(initials.substr(0, 2));
    });

    it('initials are question mark if no name is provided', () => {
        const avatar = shallow(<Avatar />);
        expect(avatar).to.have.text('?');
    });

    it('can display user profile image', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            src={sampleData.src}
        />);
        expect(avatar.find('.uir-avatar-inner-img').length).to.equal(1);
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

    function testComponentSize(size, label) {
        it(`can render a ${size} version`, () => {
            const avatar = shallow(<Avatar
                name={sampleData.name}
                size={label}
            />);
            expect(avatar).to.have.className(`uir-avatar--${label}`);
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
        expect(avatar).to.have.className('uir-avatar--halo');
    });

    function MockIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" transform="translate(3 3)">
                    <circle cx="9" cy="9" r="8" stroke="#F33061" />
                    <path fill="#F33061" d="M8 5h2v5H8zm0 6h2v2H8z" />
                </g>
            </svg>
        );
    }

    it('can display a svg icon', () => {
        const avatar = mount(<Avatar
            name={sampleData.name}
            icon={<MockIcon />}
        />);
        expect(avatar.find('span').at(2)).to.have.className('uir-avatar-icon');
        expect(avatar.find('svg').length).to.equal(1);
    });

    it('can pass through style object', () => {
        const style = { width: '10%' };
        const avatarCard = shallow(<Avatar
            name={sampleData.name}
            style={style}
        />);
        expect(avatarCard.props()).to.have.property('style', style);
    });

    it('does not have an interactive class when onClick is null', () => {
        const avatar = shallow(<Avatar name={sampleData.name} />);
        expect(avatar).not.to.have.className('uir-avatar--interactive');
    });

    it('adds an interactive class when onClick is set', () => {
        const avatar = shallow(<Avatar
            name={sampleData.name}
            onClick={() => {}}
        />);
        expect(avatar).to.have.className('uir-avatar--interactive');
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

    it('triggers click handler when enter or space pressed', () => {
        const onClickSpy = sinon.spy();
        const wrapper = mount(<Avatar
            name={sampleData.name}
            onClick={onClickSpy}
        />);
        const avatar = wrapper.find('div').at(0);
        avatar.simulate('keyDown', { key: ' ' });
        expect(onClickSpy.calledOnce).to.equal(true);
        avatar.simulate('keyDown', { key: 'Enter' });
        expect(onClickSpy.calledTwice).to.equal(true);
    });

    it('does nothing when any key (other than space or enter) pressed', () => {
        const onClickSpy = sinon.spy();
        const wrapper = mount(<Avatar
            name={sampleData.name}
            onClick={onClickSpy}
        />);
        const avatar = wrapper.find('div').at(0);
        avatar.simulate('keyDown', { key: 'a' });
        expect(onClickSpy.notCalled).to.equal(true);
    });
});
