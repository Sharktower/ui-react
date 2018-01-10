import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import Tooltip from '../Tooltip/Tooltip';
import storyWrapper from '../../storybook-addons/storyWrapper';

// @NB: this will be replaced by a real Icon component soon
function TempIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" transform="translate(3 3)">
                <circle cx="9" cy="9" r="8" stroke="#F33061" />
                <path fill="#F33061" d="M8 5h2v5H8zm0 6h2v2H8z" />
            </g>
        </svg>
    );
}

const stories = storiesOf('Avatar.Avatar', module);

stories.add(
    'Overview',
    storyWrapper(
        `
Avatar is a round user profile icon.

Avatars will either display a user's profile image or their initials.
        `,
        <Avatar
            name="David Smith"
            initials="DS"
            size="md"
        />,
        <div>
            <Tooltip tooltip="Click me!">
                <Avatar
                    name="Harriet Inkwell"
                    initials="HI"
                    onClick={() => { alert('hello!'); }} // eslint-disable-line
                    style={{ marginRight: '30px' }}
                />
            </Tooltip>
            <Avatar
                name="David Smith"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                src="https://randomuser.me/api/portraits/women/58.jpg"
                hasHalo
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                icon={<TempIcon />}
            />
        </div>,
    ),
);

stories.add(
    'Initials',
    storyWrapper(
        `
The default Avatar displays the user's initials.

Initials are automatically calculated from the user's name.

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

const base64 = 'data:image/jpeg;base64,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'; // eslint-disable-line

stories.add(
    'Image',
    storyWrapper(
        `
Provide an image to the \`src\` prop and the initials will be hidden in favour of the image.

You can provide a base 64 encoded string like so:

    <Avatar
        name="Matt Davies"
        src="'data:image/jpeg;base64,/9j/4AAQ ... FGrOP/2Q==';"
    />
        `,
        <Avatar
            name="Jane Doe"
            initials="JD"
            src="https://randomuser.me/api/portraits/women/58.jpg"
        />,
        <div>
            <Avatar
                name="Jane Doe"
                initials="JD"
                src={base64}
                size="xs"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src={base64}
                size="sm"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src={base64}
                size="md"
                style={{ marginRight: '10px' }}
            />
            <Avatar
                name="Jane Doe"
                initials="JD"
                src={base64}
                size="lg"
            />
        </div>,
    ),
);

stories.add(
    'Size',
    storyWrapper(
        `
Use the \`size\` prop to create a xs, sm, md or lg Avatar.

Remove the \`size\` prop for the default (md) size.
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
        'Use the `hasHalo` prop to give the Avatar a spinning halo border.',
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
    'Icon',
    storyWrapper(
        `
Use the \`icon\` prop to display a SVG icon.

_NB: The \`icon\` prop expects an Icon component._
        `,
        <Avatar
            name="Jane Smith"
            initials="JS"
            size="lg"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            icon={<TempIcon />}
        />,
        <div>
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="xs"
                icon={<TempIcon />}
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="sm"
                icon={<TempIcon />}
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="md"
                icon={<TempIcon />}
                style={{ marginRight: '30px' }}
            />
            <Avatar
                name="Jane Smith"
                initials="JS"
                size="lg"
                icon={<TempIcon />}
            />
        </div>,
    ),
);

stories.add(
    'Clickable',
    storyWrapper(
        `
Pass a function to the \`onClick\` prop to handle user interaction.

_NB: when you add a click handler the Avatar hover state changes._
`,
        <Avatar
            name="Jane Smith"
            size="lg"
            src="https://randomuser.me/api/portraits/women/8.jpg"
            onClick={() => { alert('it works!') }} // eslint-disable-line
        />,
    ),
);
