import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
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
        `
The AvatarTitle component displays a user's name and job role with a clear background.

The AvatarTitle resizes depending on the content provided.
        `,
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
        'The most simple AvatarTitle takes a `name` prop only.',
        <AvatarTitle
            name="Jane Smith"
        />,
    ),
);

stories.add(
    'Name and profile',
    storyWrapper(
        'The smallest AvatarTitle can also display an Avatar via the `avatar` prop.',
        <AvatarTitle
            name="Jane Smith"
            avatar={exampleAvatarSmall}
        />,
    ),
);

stories.add(
    'Name and role',
    storyWrapper(
        'Provide a `jobRole` prop for a midsize AvatarTitle.',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
        />,
    ),
);

stories.add(
    'Name, role and profile',
    storyWrapper(
        'The midsize AvatarTitle can also take an Avatar via the `avatar` prop.',
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
        'Pass "lg" to the `size` prop to render a larger AvatarTitle.',
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
        'The large AvatarTitle can also take an Avatar via the `avatar` prop.',
        <AvatarTitle
            name="Jane Smith"
            jobRole="Delivery Manager"
            avatar={exampleAvatarLarge}
            size="lg"
        />,
    ),
);
