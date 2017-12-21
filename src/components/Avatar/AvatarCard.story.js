import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import AvatarCard from './AvatarCard';
import Avatar from './Avatar';

const stories = storiesOf('Avatar.AvatarCard', module);

const exampleAvatarSmall = (
    <Avatar
        name="David Smith"
        src="https://randomuser.me/api/portraits/men/30.jpg"
        size="sm"
    />
);

const exampleAvatarMedium = (
    <Avatar
        name="David Smith"
        src="https://randomuser.me/api/portraits/men/30.jpg"
    />
);

const exampleAvatarLarge = (
    <Avatar
        name="David Smith"
        src="https://randomuser.me/api/portraits/men/30.jpg"
        size="lg"
    />
);

stories.add(
    'Overview',
    storyWrapper(
        'AvatarCard description will go here',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
            team="Communication Team"
            avatar={exampleAvatarLarge}
        />,
    ),
);

stories.add(
    'Name only',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard name="David Smith" />,
    ),
);

stories.add(
    'Name and profile',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard name="David Smith" avatar={exampleAvatarSmall} />,
    ),
);

stories.add(
    'Name and role',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
        />,
    ),
);

stories.add(
    'Name, role and profile',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
            avatar={exampleAvatarMedium}
        />,
    ),
);

stories.add(
    'Name and team',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            team="Communication Team"
        />,
    ),
);

stories.add(
    'Name, team and profile',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            team="Communication Team"
            avatar={exampleAvatarMedium}
        />,
    ),
);

stories.add(
    'Name, role and team',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
            team="Communication Team"
        />,
    ),
);

stories.add(
    'Name, role, team and profile',
    storyWrapper(
        'Example AvatarCard',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
            team="Communication Team"
            avatar={exampleAvatarLarge}
        />,
    ),
);
