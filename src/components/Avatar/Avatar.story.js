import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import mudanoWrapper from '../../storybook-addons/mudano-wrapper';

const stories = storiesOf('Avatar', module);

stories.add(
    'Default avatar',
    mudanoWrapper(
        'Description or documentation about my component, supports markdown',
        <Avatar name="Matthew Davies" initials="MD" />,
    ),
);

stories.add(
    'Second avatar',
    mudanoWrapper(
        'Description or documentation about my component, supports markdown',
        <Avatar
            name="Matthew Davies"
            initials="MD"
            profileImage="https://randomuser.me/api/portraits/lego/2.jpg"
        />,
    ),
);

stories.add(
    'Third avatar',
    mudanoWrapper(
        'Description or documentation about my component, supports markdown',
        <Avatar name="Matthew Davies" initials="MD" size="lg" />,
        <div>
            <Avatar name="Matthew Davies" initials="MD" size="sm" style={{ marginRight: '10px' }} />
            <Avatar name="Matthew Davies" initials="MD" size="md" style={{ marginRight: '10px' }} />
            <Avatar name="Matthew Davies" initials="MD" style={{ marginRight: '10px' }} />
            <Avatar name="Matthew Davies" initials="MD" size="lg" />
        </div>,
    ),
);
