/* global describe, expect, it, shallow */
import React from 'react';
import sinon from 'sinon';
import Tooltip from './Tooltip';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

const exampleAvatar = (
    <Avatar
        name="John Smith"
        src="https://randomuser.me/api/portraits/men/21.jpg"
        size="lg"
    />
);

const exampleTooltip = (
    <AvatarCard
        name="John Smith"
        jobRole="Sales Manager"
        team="Communication Team"
        avatar={exampleAvatar}
    />
);

describe('Tooltip', () => {
    it('renders a div element', () => {
        const tooltipBox = shallow(<Tooltip>{exampleAvatar}</Tooltip>);
        expect(tooltipBox.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const tooltipBox = shallow(<Tooltip>{exampleAvatar}</Tooltip>);
        expect(tooltipBox.find('div').hasClass('uir-tooltip'))
            .to.equal(true);
    });

    it('can past in children props', () => {
        const tooltipBox = shallow(<Tooltip>{exampleAvatar}</Tooltip>);
        expect(tooltipBox.find(Avatar).length).to.equal(1);
    });

    it('hides tooltip by default', () => {
        const tooltipBox = shallow(<Tooltip tooltip={exampleTooltip}>{exampleAvatar}</Tooltip>);
        expect(tooltipBox.find(AvatarCard).length).to.equal(0);
    });

    it('can choose to show tooltip', () => {
        const tooltipBox = shallow(<Tooltip tooltip={exampleTooltip} showTooltip>{exampleAvatar}</Tooltip>);
        expect(tooltipBox.find(AvatarCard).length).to.equal(1);
    });

    it('sets state showTooltip to true on mouse enter', () => {
        const avatar = shallow(<Tooltip showTooltip>contents</Tooltip>);
        avatar.find('div').at(0).simulate('mouseEnter');
        expect(avatar.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on mouse leave', () => {
        const avatar = shallow(<Tooltip showTooltip={false}>contents</Tooltip>);
        avatar.find('div').at(0).simulate('mouseLeave');
        expect(avatar.state().showTooltip).to.equal(false);
    });

    it('sets state showTooltip to true on focus', () => {
        const avatar = shallow(<Tooltip showTooltip={false}>contents</Tooltip>);
        avatar.find('div').at(0).simulate('focus');
        expect(avatar.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on blur', () => {
        const avatar = shallow(<Tooltip showTooltip>contents</Tooltip>);
        avatar.find('div').at(0).simulate('blur');
        expect(avatar.state().showTooltip).to.equal(false);
    });

    // @TODO: complains if not passed a component to children
});
