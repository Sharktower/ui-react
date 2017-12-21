import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import AvatarTitle from './AvatarTitle';
import Avatar from './Avatar';

const stories = storiesOf('Avatar.AvatarTitle', module);

const exampleAvatarSmall = (
    <Avatar
        name="Jane Smith"
        src="https://randomuser.me/api/portraits/women/49.jpg"
        size="sm"
    />
);

const exampleAvatarMedium = (
    <Avatar
        name="Jane Smith"
        src="https://randomuser.me/api/portraits/women/49.jpg"
        size="md"
    />
);

const exampleAvatarLarge = (
    <Avatar
        name="Jane Smith"
        src="https://randomuser.me/api/portraits/women/49.jpg"
        size="lg"
    />
);

stories.add(
    'Overview',
    storyWrapper(
        'AvatarTitle description will go here',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
            avatar={exampleAvatarLarge}
            size="lg"
        />,
    ),
);

stories.add(
    'Name only',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
        />,
    ),
);

stories.add(
    'Name and profile',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
            avatar={exampleAvatarSmall}
        />,
    ),
);

stories.add(
    'Name and role',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
        />,
    ),
);

stories.add(
    'Name, role and profile',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
            avatar={exampleAvatarMedium}
        />,
    ),
);

stories.add(
    'Name and role (large)',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
            size="lg"
        />,
    ),
);

stories.add(
    'Name, role and profile (large)',
    storyWrapper(
        'Example AvatarTitle',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
            avatar={exampleAvatarLarge}
            size="lg"
        />,
    ),
);
