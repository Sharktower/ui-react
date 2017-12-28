import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import Tooltip from './Tooltip';
import TooltipBox from './TooltipBox';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

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
        'Simple tooltip wrapper',
        <Tooltip tooltip={exampleTooltip}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

stories.add(
    'Show',
    storyWrapper(
        'Simple tooltip wrapper',
        <Tooltip showTooltip tooltip={exampleTooltip}>
            {exampleAvatar}
        </Tooltip>,
    ),
);

stories.add(
    'Position',
    storyWrapper(
        'Simple tooltip wrapper',
        <Tooltip position="top-left" tooltip={<TooltipBox>Top Left</TooltipBox>}>
            {exampleAvatar}
        </Tooltip>,
        <div style={{ display: 'inline-block', padding: '30px', border: '1px dashed #999' }}>
            <Tooltip
                position="top-left"
                tooltip={<TooltipBox>positioned top left</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="bottom-left"
                tooltip={<TooltipBox>positioned bottom left</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px' }}
            >
                {exampleAvatar}
            </Tooltip>
            <Tooltip
                position="top-right"
                tooltip={<TooltipBox>positioned top right</TooltipBox>}
                showTooltip
                style={{ marginRight: '100px' }}
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
        </div>,
    ),
);
