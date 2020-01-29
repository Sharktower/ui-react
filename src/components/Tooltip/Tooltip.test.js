/* global describe, expect, it, shallow, mount, beforeEach, afterEach */
import React from 'react';
import sinon from 'sinon';
import * as common from '../../../test/unit/commonTests';
import Tooltip from './Tooltip';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

describe('Tooltip', () => {
    const mockEvent = {
        target: {
            getBoundingClientRect: () => ({ x: 0, y: 0 }),
        },
    };

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

    common.isConformant(Tooltip, { requiredProps: { children: exampleAvatar, tooltip: <span /> } });

    it('complains if tooltip is not provided', () => {
        shallow(<Tooltip>contents</Tooltip>);
        // eslint-disable-next-line no-console
        expect(console.error).to.be.calledWithMatch('The prop `tooltip` is marked as required in `Tooltip`');
    });

    it('has correct inner class', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        expect(tooltip.find('div').at(1)).to.have.className('uir-tooltip-inner');
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
        tooltip.find('div').at(0).simulate('mouseEnter', mockEvent);
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

    it('sets sensible top and left positions by default', () => {
        const tooltip = shallow(<Tooltip showTooltip tooltip={<div />}>{exampleAvatar}</Tooltip>);
        const contents = tooltip.find('.uir-tooltip-contents');
        const { top, left } = contents.props().style;

        expect(top).to.equal('0px');
        expect(left).to.equal('10px');
    });

    [
        ['top-center', '-10px', '0px'],
        ['top-left', '0px', '-10px'],
        ['top-right', '0px', '10px'],
        ['bottom-center', '10px', '0px'],
        ['bottom-left', '0px', '-10px'],
        ['bottom-right', '0px', '10px'],
        ['right', '0px', '10px'],
        ['left', '0px', '-10px'],
    ].forEach(([position, expectedTop, expectedLeft]) => {
        it(`sets top and left values for position ${position}`, () => {
            const tooltip = shallow((
                <Tooltip
                    showTooltip
                    position={position}
                    tooltip={<div />}
                >
                    {exampleAvatar}
                </Tooltip>
            ));

            const contents = tooltip.find('.uir-tooltip-contents');
            const { top, left } = contents.props().style;

            expect(top).to.equal(expectedTop);
            expect(left).to.equal(expectedLeft);
        });
    });

    it('sets state showTooltip to true on mouse enter', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip>contents</Tooltip>);
        tooltip.find('.uir-tooltip-inner').simulate('mouseEnter');
        expect(tooltip.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on mouse leave', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip={false}>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('mouseLeave');
        expect(tooltip.state().showTooltip).to.equal(false);
    });

    it('sets state showTooltip to true on focus', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip={false}>contents</Tooltip>);
        tooltip.find('.uir-tooltip-inner').simulate('focus');
        expect(tooltip.state().showTooltip).to.equal(true);
    });

    it('sets state showTooltip to false on blur', () => {
        const tooltip = shallow(<Tooltip tooltip={<div />} showTooltip>contents</Tooltip>);
        tooltip.find('div').at(0).simulate('blur');
        expect(tooltip.state().showTooltip).to.equal(false);
    });

    it('uses autoPosition from state if position is set to auto', () => {
        const tooltipComponent = shallow((
            <Tooltip tooltip={<div />} showTooltip position="auto">
                <div className="componentWithTooltip">content</div>
            </Tooltip>
        ));

        tooltipComponent.setState({ autoPosition: 'bottom-left' });

        const contents = tooltipComponent.find('div').at(1);
        const { top, left } = contents.props().style;

        expect(top).to.equal('0px');
        expect(left).to.equal('-10px');
    });

    it('sets autoPosition on focus', () => {
        const tooltip = mount(<Tooltip tooltip={<div />} position="auto">contents</Tooltip>);

        tooltip.find('.uir-tooltip-inner').simulate('focus', mockEvent);
        expect(tooltip.update().state().autoPosition).to.equal('bottom-right');
    });

    [
        [10, 10, 'bottom-right'],
        [400, 10, 'bottom-left'],
        [10, 350, 'top-right'],
        [400, 400, 'top-left'],
    ].forEach(([left, top, expected]) => {
        it('sets autoPosition correctly based on event coordinates', () => {
            const tooltip = mount((
                <Tooltip position="auto" tooltip={<div />}>{exampleAvatar}</Tooltip>
            ));

            // headless browser screenWidth: 785, screenHeight: 600
            tooltip.instance().wrapper.getBoundingClientRect = () => ({ left, top });
            tooltip.find('.uir-tooltip-inner').simulate('focus');
            expect(tooltip.update().state().autoPosition).to.equal(expected);
        });
    });
});
