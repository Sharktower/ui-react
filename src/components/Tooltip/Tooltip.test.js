/* global describe, expect, it, shallow, beforeEach, afterEach */
import React from 'react';
// import sinon from 'sinon';
import Tooltip from './Tooltip';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

// const sandbox = sinon.sandbox.create();

// beforeEach(() => {
//     sandbox.stub(console, 'error');
// });
//
// afterEach(() => {
//     sandbox.restore();
// });

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
    // it('complains if tooltip is not provided', () => {
    //     shallow(<Tooltip>contents</Tooltip>);
    //     // eslint-disable-next-line no-console
    //     expect(console.error.calledWithMatch('The prop `name` is marked as required in `AvatarTitle`')).to.equal(true);
    // });

    it('renders a div element', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find('div').length).to.equal(1);
    });

    it('has correct class', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find('div').hasClass('uir-tooltip'))
            .to.equal(true);
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const tooltip = shallow(<Tooltip tooltip={<div />} className={exampleClassName} />);
        expect(tooltip.find('div').at(0).hasClass(exampleClassName)).to.equal(true);
    });

    it('can past in children props', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find(Avatar).length).to.equal(1);
    });

    it('can have a tabIndex', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} tabIndex={-1}>contents</Tooltip>);
        expect(tooltip.find('div').at(0).props()).to.have.property('tabIndex', -1);
    });

    it('hides tooltip by default', () => {
        const tooltip = shallow(<Tooltip tooltip={exampleTooltip}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find(AvatarCard).length).to.equal(0);
    });

    it('can choose to show tooltip', () => {
        const tooltip = shallow(<Tooltip tooltip={exampleTooltip} showTooltip>{exampleAvatar}</Tooltip>);
        expect(tooltip.find(AvatarCard).length).to.equal(1);
    });

    it('sets state showTooltip to true on mouse enter', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('mouseEnter');
        expect(tooltip.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on mouse leave', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip={false}>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('mouseLeave');
        expect(tooltip.state().showTooltip).to.equal(false);
    });

    it('sets state showTooltip to true on focus', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip={false}>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('focus');
        expect(tooltip.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on blur', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('blur');
        expect(tooltip.state().showTooltip).to.equal(false);
    });
});
