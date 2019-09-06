import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import Tooltip from './Tooltip';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';
import { TooltipPosition } from './TooltipEnums';

const stories = storiesOf('Tooltip.Tooltip', module);

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

stories.add(
    'Wrapper',
    storyWrapper(
        `
Tooltip wraps trigger elements and provides on hover tip functionality.

Put your trigger element as the Tooltip's child.

Then pass your tooltip element to the \`tooltip\` prop.

For example:

    const AvatarCard = (
        <AvatarCard
            name="John Smith"
            jobRole="Sales Manager"
            team="Communication Team"
            avatar={exampleAvatar}
        />
    );

    <Tooltip tooltip={AvatarCard}>
        <Avatar
            name="John Smith"
            src="https://randomuser.me/api/portraits/men/21.jpg"
            size="lg"
        />
    </Tooltip>
`,
        <Tooltip position="top-right" tooltip={exampleTooltip}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

stories.add(
    'Show',
    storyWrapper(
        'Pass the `showTooltip` prop to force show or hide a tooltip.',
        <Tooltip showTooltip tooltip={<TooltipBox>my tooltip</TooltipBox>}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

const outerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    border: '1px dashed #999',
    padding: 60,
};

const innerDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
};

stories.add(
    'Position',
    storyWrapper(
        'Use the `position` prop to change the location of the tooltip.',
        <Tooltip position="top-center" tooltip={<TooltipBox>top center</TooltipBox>}>
            {exampleAvatar}
        </Tooltip>,
        <div style={outerDivStyle}>
            <div style={innerDivStyle}>
                <Tooltip
                    position="top-left"
                    tooltip={<TooltipBox>positioned top left</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
                <Tooltip
                    position="top-center"
                    tooltip={<TooltipBox>positioned top center</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
                <Tooltip
                    position="top-right"
                    tooltip={<TooltipBox>positioned top right</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
            </div>
            <div style={innerDivStyle}>
                <Tooltip
                    position="left"
                    tooltip={<TooltipBox>positioned left</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
                <Tooltip
                    position="right"
                    tooltip={<TooltipBox>positioned right</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
            </div>
            <div style={innerDivStyle}>
                <Tooltip
                    position="bottom-left"
                    tooltip={<TooltipBox>positioned bottom left</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
                <Tooltip
                    position="bottom-center"
                    tooltip={<TooltipBox>positioned bottom center</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
                <Tooltip
                    position="bottom-right"
                    tooltip={<TooltipBox>positioned bottom right</TooltipBox>}
                    showTooltip
                >
                    {exampleAvatar}
                </Tooltip>
            </div>
        </div>,
    ),
);

stories.add('Auto Position', storyWrapper(
    `Setting the \`position\` prop to \`auto\` allows the tooltip to select the best position for itself.
    This is done by looking at the screen position of the tooltip child element and placing the tooltip as far from the screen edge as possible.`,
    <Tooltip position="auto" tooltip={<TooltipBox>auto</TooltipBox>}>
        {exampleAvatar}
    </Tooltip>,
    <div>
        <div
            style={{
                display: 'grid',
                width: '100%',
                height: '100vh',
                placeItems: 'center',
                gridTemplateColumns: 'repeat(2, .5fr)',
                gridTemplateRows: 'repeat(2, .5fr)',
            }}
        >
            <Tooltip
                position="auto"
                tooltip={<TooltipBox>Auto positioned tooltip with some words</TooltipBox>}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="auto"
                tooltip={<TooltipBox>Auto positioned tooltip with some words</TooltipBox>}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="auto"
                tooltip={<TooltipBox>Auto positioned tooltip with some words</TooltipBox>}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="auto"
                tooltip={<TooltipBox>Auto positioned tooltip with some words</TooltipBox>}
            >
                {exampleAvatar}
            </Tooltip>
        </div>
    </div>,
));
