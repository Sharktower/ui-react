import React from 'react';
import { storiesOf } from '@storybook/react';
import UserProfile from './UserProfile';
import mudanoWrapper from '../../storybook-addons/mudano-wrapper';

const stories = storiesOf('Avatar.UserProfile', module);

stories.add(
    'Without profile image',
    mudanoWrapper(
        'The default avatar displays the users initials',
        <UserProfile name="David Smith" initials="DS" />,
    ),
);

stories.add(
    'With profile image',
    mudanoWrapper(
        'Provide a profileImage to the avatar and the initials will be hidden',
        <UserProfile
            name="Jane Doe"
            initials="JD"
            profileImage="https://randomuser.me/api/portraits/women/58.jpg"
        />,
    ),
);

stories.add(
    'Different sizes',
    mudanoWrapper(
        'Use the size prop to create a sm, md or lg avatar. Remove the size prop for the default size.',
        <UserProfile name="Joe Bloggs" initials="JB" size="lg" />,
        <div>
            <UserProfile name="Joe Bloggs" initials="JB" size="sm" style={{ marginRight: '10px' }} />
            <UserProfile name="Joe Bloggs" initials="JB" size="md" style={{ marginRight: '10px' }} />
            <UserProfile name="Joe Bloggs" initials="JB" style={{ marginRight: '10px' }} />
            <UserProfile name="Joe Bloggs" initials="JB" size="lg" />
        </div>,
    ),
);
