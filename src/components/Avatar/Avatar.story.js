import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Avatar.Avatar', module);

stories.add(
    'Overview',
    storyWrapper(
        'The avatar is a round user profile icon.  The avatar\'s primary role is as a button.',
        <Avatar name="David Smith" initials="DS" />,
    ),
);

stories.add(
    'Initials',
    storyWrapper(
        `
The default avatar displays the user's initials.

Initials is automatically calculated from the user's name.

You can override this by setting the \`initials\` prop.
        `,
        <Avatar name="David Smith" initials="DS" />,
        <div>
            <Avatar
                name="Jane"
                initials="J"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
            />
        </div>,
    ),
);

stories.add(
    'Image',
    storyWrapper(
        'Provide an image to the `src` prop and the initials will be hidden in favour of the image.',
        <Avatar
            name="Jane Doe"
            initials="JD"
            src="https://randomuser.me/api/portraits/women/58.jpg"
        />,
        <div>
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/58.jpg"
                size="xs"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/58.jpg"
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/58.jpg"
                size="md"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/58.jpg"
                size="lg"
            />
        </div>,
    ),
);

stories.add(
    'Size',
    storyWrapper(
        `
Use the size prop to create a xs, sm, md or lg avatar.

Remove the size prop for the default (md) size.
        `,
        <Avatar
            name="Joe Bloggs"
            initials="JB"
            size="lg"
        />,
        <div>
            <Avatar
                name="small"
                initials="XS"
                size="xs"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="medium"
                initials="SM"
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="default"
                initials="MD"
                size="md"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="large"
                initials="LG"
                size="lg"
            />
        </div>,
    ),
);

stories.add(
    'Halo',
    storyWrapper(
        'Use the `hasHalo` prop to give the avatar a spinning halo border.',
        <Avatar
            name="Jane Doe"
            initials="JD"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            hasHalo
        />,
        <div>
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                hasHalo
                size="xs"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                hasHalo
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                hasHalo
                size="md"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                hasHalo
                size="lg"
            />
        </div>,
    ),
);

stories.add(
    'Status',
    storyWrapper(
        'Pass an emoji to the `status` prop to display a status icon.',
        <Avatar
            name="David Smith"
            initials="DS"
            size="lg"
            src="https://randomuser.me/api/portraits/men/84.jpg"
            status="🦄"
        />,
        <div>
            <Avatar
                name="David Smith"
                initials="DS"
                size="xs"
                src="https://randomuser.me/api/portraits/men/84.jpg"
                status="🌴"
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="David Smith"
                initials="DS"
                size="sm"
                src="https://randomuser.me/api/portraits/men/84.jpg"
                status="🤚"
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="David Smith"
                initials="DS"
                size="md"
                src="https://randomuser.me/api/portraits/men/84.jpg"
                status="🤕"
            />
        </div>,
    ),
);

stories.add(
    'Theme',
    storyWrapper(
        'Use the `theme` prop to set the status and notification icon background.',
        <Avatar
            name="David Smith"
            initials="DS"
            theme="dark"
            size="lg"
            src="https://randomuser.me/api/portraits/men/3.jpg"
            status="😡"
        />,
        <div style={{ backgroundColor: '#3a333c', display: 'inline-block', padding: '30px' }}>
            <Avatar
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                status="🐴"
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                status="🚀"
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="David Smith"
                initials="DS"
                theme="dark"
                size="lg"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                status="🏆"
            />
        </div>,
    ),
);

stories.add(
    'Notification',
    storyWrapper(
        `
Use the \`hasNotification\` prop to displays a notification icon.

_NB: The warning icon overrides any status icon._
`,
        <Avatar
            name="Jane Smith"
            initials="JS"
            size="lg"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            hasNotification
        />,
        <div>
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="xs"
                hasNotification
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="sm"
                hasNotification
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="md"
                hasNotification
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="lg"
                hasNotification
            />
        </div>,
    ),
);

stories.add(
    'Clickable',
    storyWrapper(
        `
Pass a function to the \`onClick\` prop to handle user interaction.

_NB: when you add a click handler the avatar hover state changes._
`,
        <Avatar
            name="Jane Smith"
            size="lg"
            src="https://randomuser.me/api/portraits/women/8.jpg"
            onClick={() => { alert('it works!') }} // eslint-disable-line
        />,
    ),
);
