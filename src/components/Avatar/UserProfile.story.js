import React from 'react';
import { storiesOf } from '@storybook/react';
import UserProfile from './UserProfile';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Avatar.UserProfile', module);

stories.add(
    'Overview',
    storyWrapper(
        'The avatar is a user icon that will display either the users initials or a profile image.',
        <UserProfile name="David Smith" initials="DS" />,
    ),
);

stories.add(
    'Initials',
    storyWrapper(
        'The default avatar displays the users initials and no profile image',
        <UserProfile name="David Smith" initials="DS" />,
        <div>
            <UserProfile
                name="Jane"
                initials="J"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="Jane Doe"
                initials="JD"
                style={{ marginRight: '10px' }}
            />
        </div>,
    ),
);

stories.add(
    'Profile image',
    storyWrapper(
        'Provide a profileImage to the avatar and the initials will be hidden',
        <UserProfile
            name="Jane Doe"
            initials="JD"
            profileImage="https://randomuser.me/api/portraits/women/58.jpg"
        />,
        <div>
            <UserProfile
                name="Jane Doe"
                initials="JD"
                profileImage="https://randomuser.me/api/portraits/women/58.jpg"
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="Jane Doe"
                initials="JD"
                profileImage="https://randomuser.me/api/portraits/women/58.jpg"
                size="md"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="Jane Doe"
                initials="JD"
                profileImage="https://randomuser.me/api/portraits/women/58.jpg"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="Jane Doe"
                initials="JD"
                profileImage="https://randomuser.me/api/portraits/women/58.jpg"
                size="lg"
                style={{ marginRight: '10px' }}
            />
        </div>,
    ),
);

stories.add(
    'Different sizes',
    storyWrapper(
        `Use the size prop to create a sm, md or lg avatar.
        Remove the size prop for the default size.`,
        <UserProfile
            name="Joe Bloggs"
            initials="JB"
            size="lg"
        />,
        <div>
            <UserProfile
                name="small"
                initials="SM"
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="medium"
                initials="MD"
                size="md"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="default"
                initials="DF"
                style={{ marginRight: '10px' }}
            />
            <UserProfile
                name="large"
                initials="LG"
                size="lg"
            />
        </div>,
    ),
);

stories.add(
    'Status icon',
    storyWrapper(
        'Displays emoji status icon',
        <UserProfile
            name="David Smith"
            initials="DS"
            size="lg"
            profileImage="https://randomuser.me/api/portraits/men/84.jpg"
            status="🦄"
        />,
        <div>
            <UserProfile
                name="David Smith"
                initials="DS"
                size="sm"
                profileImage="https://randomuser.me/api/portraits/men/84.jpg"
                status="🌴"
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="David Smith"
                initials="DS"
                size="md"
                profileImage="https://randomuser.me/api/portraits/men/84.jpg"
                status="🤚"
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="David Smith"
                initials="DS"
                profileImage="https://randomuser.me/api/portraits/men/84.jpg"
                status="🤕"
                style={{ marginRight: '30px' }}
            />
        </div>,
    ),
);

stories.add(
    'Dark theme',
    storyWrapper(
        `The default avatar will work on light and dark backgrounds.

Use the theme prop to set the status and notification icon background.`,
        <UserProfile
            name="David Smith"
            initials="DS"
            theme="dark"
            size="lg"
            profileImage="https://randomuser.me/api/portraits/men/3.jpg"
            status="😡"
        />,
        <div style={{ backgroundColor: '#3a333c', display: 'inline-block', padding: '30px' }}>
            <UserProfile
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                profileImage="https://randomuser.me/api/portraits/men/3.jpg"
                status="🐴"
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                profileImage="https://randomuser.me/api/portraits/men/3.jpg"
                status="🚀"
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                profileImage="https://randomuser.me/api/portraits/men/3.jpg"
                status="🏆"
                style={{ marginRight: '30px' }}
            />
        </div>,
    ),
);

stories.add(
    'Notification warning',
    storyWrapper(
        'Displays an avatar with a warning icon. *NB: The warning icon overrides any status icon.*',
        <UserProfile
            name="Jane Smith"
            initials="JS"
            size="lg"
            profileImage="https://randomuser.me/api/portraits/women/68.jpg"
            notification
        />,
        <div>
            <UserProfile
                name="Jane Smith"
                initials="JS"
                size="sm"
                notification
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="Jane Smith"
                initials="JS"
                size="md"
                notification
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="Jane Smith"
                initials="JS"
                notification
                style={{ marginRight: '30px' }}
            />
            <UserProfile
                name="Jane Smith"
                initials="JS"
                size="lg"
                notification
                style={{ marginRight: '30px' }}
            />
        </div>,
    ),
);
