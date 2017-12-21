import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import Tooltip from './Tooltip';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

const stories = storiesOf('Tooltip', module);

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
    'Tooltip',
    storyWrapper(
        'Simple tooltip wrapper',
        <Tooltip tooltip={exampleTooltip}>
            {exampleAvatar}
        </Tooltip>,
    ),
);
