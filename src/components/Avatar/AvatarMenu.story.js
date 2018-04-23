import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import AvatarMenu from './AvatarMenu';
import { AvatarMenuIcons, AvatarMenuNavType } from './AvatarMenu/AvatarMenuEnums';
import Avatar from './Avatar';

const stories = storiesOf('Avatar.AvatarMenu', module);

const exampleAvatar = (
    <Avatar
        name="Jane Smith"
        src="https://randomuser.me/api/portraits/women/49.jpg"
    />
);

stories.add(
    'Overview',
    storyWrapper(
        `
\`AvatarMenu\` displays a user avatar and wrapped with a menu designed for global navigation.
        `,
        <AvatarMenu avatar={exampleAvatar}>
            <AvatarMenu.Nav location={AvatarMenuNavType.USER}>
                <AvatarMenu.Item>Feedback</AvatarMenu.Item>
                <AvatarMenu.Item>Settings</AvatarMenu.Item>
                <AvatarMenu.Item>Logout</AvatarMenu.Item>
            </AvatarMenu.Nav>
            <AvatarMenu.Nav location={AvatarMenuNavType.APP}>
                <AvatarMenu.Item icon={AvatarMenuIcons.DASHBOARD}>My Dashboard</AvatarMenu.Item>
                <AvatarMenu.Item icon={AvatarMenuIcons.FOCUS}>Priority Tracker</AvatarMenu.Item>
                <AvatarMenu.Item icon={AvatarMenuIcons.DASHBOARD}>Project Status</AvatarMenu.Item>
                <AvatarMenu.Item icon={AvatarMenuIcons.PLAN}>Plan Management</AvatarMenu.Item>
                <AvatarMenu.Item icon={AvatarMenuIcons.PROJECT}>Example Project</AvatarMenu.Item>
                <AvatarMenu.Item icon={AvatarMenuIcons.PROJECT}>Example Project</AvatarMenu.Item>
            </AvatarMenu.Nav>
        </AvatarMenu>,
    ),
);
