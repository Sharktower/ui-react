import React from 'react';
import { storiesOf } from '@storybook/react';
import storyWrapper from '../../storybook-addons/storyWrapper';
import UserCard from './UserCard';
import UserProfile from './UserProfile';

const stories = storiesOf('Avatar.UserCard', module);

const exampleUserProfile = (
    <UserProfile
        name="David Smith"
        profileImage="https://randomuser.me/api/portraits/men/30.jpg"
    />
);

const exampleUserProfileMD = (
    <UserProfile
        name="David Smith"
        profileImage="https://randomuser.me/api/portraits/men/30.jpg"
        size="md"
    />
);

const exampleUserProfileLG = (
    <UserProfile
        name="David Smith"
        profileImage="https://randomuser.me/api/portraits/men/30.jpg"
        size="lg"
    />
);

const exampleUserProfileFloat = (
    <UserProfile
        name="David Smith"
        profileImage="https://randomuser.me/api/portraits/men/30.jpg"
        size="lg"
        style={{ float: 'left', margin: '6px 10px 6px 0px' }}
    />
);

stories.add(
    'Default',
    storyWrapper(
        `The UserCard provides a tooltip wrapper to the standard UserProfile.

Add elements as children to have them display in the tooltip. For example:

    <UserCard profile={userProfile}>
        <div>
            <h1>David Smith</h1>
            <h2>Sales Manager</h2>
            <p>Communication Team</p>
        </div>
    </UserCard>

        `,
        (
            <UserCard profile={exampleUserProfileLG} showTooltip>
                <div>My Tooltip Contents</div>
            </UserCard>
        ),
        <div>
            <UserCard profile={exampleUserProfileMD} style={{ marginRight: '30px' }}>
                <div>David Smith</div>
            </UserCard>
            <UserCard profile={exampleUserProfile} style={{ marginRight: '30px' }}>
                <div>
                    <h1 style={{ fontSize: '26px', fontWeight: 'normal', margin: '0 0 5px' }}>David Smith</h1>
                    <h2 style={{ fontSize: '16px', fontWeight: 'normal', margin: '0 0 5px' }}>Sales Manager</h2>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', margin: '0' }}>Communication Team</p>
                </div>
            </UserCard>
            <UserCard profile={exampleUserProfileLG} style={{ marginRight: '30px' }}>
                <div style={{ width: '210px' }}>
                    {exampleUserProfileFloat}
                    <h1 style={{ fontSize: '26px', fontWeight: 'normal', margin: '0' }}>David Smith</h1>
                    <h2 style={{ fontSize: '16px', fontWeight: 'normal', margin: '0 0 2px' }}>Sales Manager</h2>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', margin: '0' }}>Communication Team</p>
                </div>
            </UserCard>
        </div>,
    ),
);
