import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import Avatar from './Avatar';
import AvatarMenu from './AvatarMenu';
import { AvatarMenuPosition } from './AvatarMenu/AvatarMenuEnums';
import Button from '../Button/Button';
import IconDashboard from '../Icon/IconDashboard';
import IconProject from '../Icon/IconProject';
import IconPriority from '../Icon/IconPriority';

const stories = storiesOf('Avatar.AvatarMenu', module);

stories.add(
    'Overview',
    storyWrapper(
        `
\`AvatarMenu\` displays a user avatar and wrapped with a menu designed for global navigation.

\`\`\`
<AvatarMenu avatar={<Avatar />}>
    <AvatarMenu.Nav>
        <AvatarMenu.Item> ... </AvatarMenu.Item>
        <AvatarMenu.Item> ... </AvatarMenu.Item>
        <AvatarMenu.Item> ... </AvatarMenu.Item>
    </AvatarMenu.Nav>
    <AvatarMenu.Nav>
        <AvatarMenu.Item icon={<Icon />}> ... </AvatarMenu.Item>
        <AvatarMenu.Item icon={<Icon />}> ... </AvatarMenu.Item>
        <AvatarMenu.Item icon={<Icon />}> ... </AvatarMenu.Item>
        <AvatarMenu.Item icon={<Icon />}> ... </AvatarMenu.Item>
        <AvatarMenu.Item icon={<Icon />}> ... </AvatarMenu.Item>
        <AvatarMenu.Item hasSpacer> ... </AvatarMenu.Item>
    </AvatarMenu.Nav>
</AvatarMenu>
\`\`\`
        `,
        <AvatarMenu
            avatar={<Avatar name="Jane Smith" src="https://randomuser.me/api/portraits/women/49.jpg" />}
            open
            position={AvatarMenuPosition.LEFT}
        >
            <AvatarMenu.Nav>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Feedback
                    </Button>
                </AvatarMenu.Item>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Settings
                    </Button>
                </AvatarMenu.Item>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Logout
                    </Button>
                </AvatarMenu.Item>
            </AvatarMenu.Nav>
            <AvatarMenu.Nav>
                <AvatarMenu.Item icon={<IconDashboard />}>My Dashboard</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconPriority />}>Priority Tracker</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconDashboard />}>Project Status</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconProject />}>Example Project</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconProject />}>Example Project</AvatarMenu.Item>
                <AvatarMenu.Item hasSpacer>Add Project</AvatarMenu.Item>
            </AvatarMenu.Nav>
        </AvatarMenu>,
    ),
);

stories.add(
    'Position',
    storyWrapper(
        `
The prop \`position\` adjusts where the \`AvatarMenu\` is displayed. The default is to the right.
        `,
        <AvatarMenu
            avatar={<Avatar name="Jane Smith" src="https://randomuser.me/api/portraits/women/49.jpg" />}
            open
            position={AvatarMenuPosition.RIGHT}
        >
            <AvatarMenu.Nav>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Feedback
                    </Button>
                </AvatarMenu.Item>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Settings
                    </Button>
                </AvatarMenu.Item>
                <AvatarMenu.Item>
                    <Button onClick={() => {}} variant="clear">
                        Logout
                    </Button>
                </AvatarMenu.Item>
            </AvatarMenu.Nav>
            <AvatarMenu.Nav>
                <AvatarMenu.Item icon={<IconDashboard />}>My Dashboard</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconPriority />}>Priority Tracker</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconDashboard />}>Project Status</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconProject />}>Example Project</AvatarMenu.Item>
                <AvatarMenu.Item icon={<IconProject />}>Example Project</AvatarMenu.Item>
                <AvatarMenu.Item hasSpacer>Add Project</AvatarMenu.Item>
            </AvatarMenu.Nav>
        </AvatarMenu>,
    ),
);
