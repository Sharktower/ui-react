/* global describe, expect, it, shallow, mount, beforeEach, afterEach */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import Tooltip from './Tooltip';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

describe('Tooltip', () => {
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

    const sandbox = sinon.sandbox.create();

    beforeEach(() => {
        sandbox.stub(console, 'error');
    });

    afterEach(() => {
        sandbox.restore();
    });

    common.rendersTag(Tooltip, 'div', { requiredProps: { children: exampleAvatar, tooltip: <span /> } });

    it('complains if tooltip is not provided', () => {
        shallow(<Tooltip>contents</Tooltip>);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('The prop `tooltip` is marked as required in `Tooltip`');
    });

    it('has correct class', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip).to.have.className('uir-tooltip');
    });

    it('has correct inner class', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find('div').at(1)).to.have.className('uir-tooltip-inner');
    });

    it('has top-center class by default', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find('div').at(0)).to.have.className('uir-tooltip--top-center');
    });

    [
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-left',
        'bottom-right',
    ].forEach((position) => {
        it(`can pass through position class ${position}`, () => {
            const tooltip = shallow((
                <Tooltip
                    position={position}
                    tooltip={<div />}
                >
                    {exampleAvatar}
                </Tooltip>
            ));
            expect(tooltip).to.have.className(`uir-tooltip--${position}`);
        });
    });

    it('can pass through class', () => {
        const exampleClassName = 'example-class';
        const tooltip = shallow(<Tooltip tooltip={<div />} className={exampleClassName} />);
        expect(tooltip).to.have.className(exampleClassName);
    });

    it('can pass in children props', () => {
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
        const tooltip = shallow((
            <Tooltip tooltip={exampleTooltip} showTooltip>{exampleAvatar}</Tooltip>
        ));
        expect(tooltip.find(AvatarCard).length).to.equal(1);
    });

    it('does not hide on blur if showTooltip true', () => {
        const tooltip = shallow((
            <Tooltip tooltip={exampleTooltip} showTooltip>{exampleAvatar}</Tooltip>
        ));
        tooltip.simulate('blur');
        expect(tooltip.find(AvatarCard).length).to.equal(1);
    });

    it('will not show tooltip if showTooltip false', () => {
        const tooltip = shallow((
            <Tooltip tooltip={exampleTooltip} showTooltip={false}>{exampleAvatar}</Tooltip>
        ));
        tooltip.find('div').at(0).simulate('mouseEnter');
        expect(tooltip.find(AvatarCard).length).to.equal(0);
    });

    it('can take an element as a tooltip', () => {
        const tooltipWrapper = shallow((
            <Tooltip tooltip={<div className="test">example</div>} showTooltip>{exampleAvatar}</Tooltip>
        ));
        const tooltip = tooltipWrapper.find('div.test');
        expect(tooltip.length).to.equal(1);
        expect(tooltip).to.have.text('example');
    });

    it('can take a string as a tooltip', () => {
        const tooltipWrapper = mount((
            <Tooltip tooltip="example tooltip" showTooltip>{exampleAvatar}</Tooltip>
        ));
        const tooltipBox = tooltipWrapper.find(TooltipBox);
        expect(tooltipBox.length).to.equal(1);
        expect(tooltipBox.text()).to.equal('example tooltip');
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
