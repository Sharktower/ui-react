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
        'AvatarCard component is a user profile box that resizes depending on the content provided.',
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
        'The most simple AvatarCard takes a `name` prop only.',
        <AvatarCard name="David Smith" />,
    ),
);

stories.add(
    'Name and profile',
    storyWrapper(
        'The smallest AvatarCard can also display an Avatar via the `avatar` prop.',
        <AvatarCard name="David Smith" avatar={exampleAvatarSmall} />,
    ),
);

stories.add(
    'Name and role',
    storyWrapper(
        'Provide a `jobRole` prop for a midsize AvatarCard.',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
        />,
    ),
);

stories.add(
    'Name, role and profile',
    storyWrapper(
        'The midsize AvatarCard can also take an Avatar via the `avatar` prop.',
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
        'The `team` prop can be provided as an alternative to `jobRole`.',
        <AvatarCard
            name="David Smith"
            team="Communication Team"
        />,
    ),
);

stories.add(
    'Name, team and profile',
    storyWrapper(
        'The midsize AvatarCard can also take an Avatar via the `avatar` prop.',
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
        'The largest AvatarCard takes `name`, `jobRole` and `team` props.',
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
        'The large AvatarCard can also take an Avatar via the `avatar` prop.',
        <AvatarCard
            name="David Smith"
            jobRole="Sales Manager"
            team="Communication Team"
            avatar={exampleAvatarLarge}
        />,
    ),
);
