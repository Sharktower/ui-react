/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';
import Tooltip from '../Tooltip/Tooltip';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Button', module);

stories.add(
    'Overview',
    storyWrapper(
        `
Button is a wrapper around the html <code><button></code> element
        `,
        <Button
            onClick={() => { alert('it works!'); }} // eslint-disable-line
            className="className"
            isActive={false}
            isFullWidth={false}
            isDisabled={false}
        >
            Custom label
        </Button>,
        <div>
            <Tooltip tooltip="Click me!">
                <Button
                    onClick={() => { alert('hello'); }} // eslint-disable-line
                >
                    Default
                </Button>
            </Tooltip>
            <Button isDisabled onClick={() => {}}>Disabled</Button>
            <Button isActive onClick={() => {}}>Active</Button>
            <Button type="clear" onClick={() => {}}>Clear</Button>
            <Button type="primary" onClick={() => {}}>Primary</Button>
            <Button icon={<IconArrow />} onClick={() => {}}>Icon</Button>
            <Button type="round" icon={<IconArrow />} onClick={() => {}} />
        </div>,
    ),
);

stories.add(
    'Active',
    storyWrapper(
        `
Active buttons can be used to indicate button selection, for example as part of the Tabs component.
Use <code>isActive</code>
        `,
        <Button isActive onClick={() => {}}>Active</Button>,
        <div>
            <Button isActive onClick={() => {}}>Active</Button>
            <Button onClick={() => {}}>Not active</Button>
        </div>,
    ),
);

stories.add(
    'Clear',
    storyWrapper(
        `
Clear buttons, use type="clear"
        `,
        <Button type="clear" onClick={() => {}}>Not active</Button>,
        <div>
            <Button type="clear" onClick={() => {}}>Clear not active</Button>
            <Button type="clear" isActive onClick={() => {}}>Clear active</Button>
        </div>,
    ),
);

stories.add(
    'Primary',
    storyWrapper(
        `
Primary buttons should be used for main calls to action, use <code>type="primary"</code>
        `,
        <Button type="primary" onClick={() => {}}>Not active</Button>,
        <div>
            <Button type="primary" onClick={() => {}}>Not active</Button>
            <Button type="primary" isActive onClick={() => {}}>Active</Button>
        </div>,
    ),
);

stories.add(
    'Round',
    storyWrapper(
        `
Use <code>type="round"</code> and <code>icon={}</code> for buttons with an icon and no text
        `,
        <Button type="round" icon={<IconArrow />} onClick={() => {}} />,
        <div>
            <Button type="round" icon={<IconArrow />} onClick={() => {}} /> Default
            <br />
            <Button type="round" icon={<IconArrow />} isActive onClick={() => {}} /> Active
            <br />
            <Button type="round" icon={<IconArrow />} isDisabled onClick={() => {}} /> Disabled
        </div>,
    ),
);

stories.add(
    'Full width',
    storyWrapper(
        `
Full width buttons, use <code>isFullWidth</code>
        `,
        <Button isFullWidth onClick={() => {}}>Full width button</Button>,
        <div>
            <Button isFullWidth type="clear" onClick={() => {}}>Clear</Button>
            <Button isFullWidth type="primary" onClick={() => {}}>Primary</Button>
            <Button isFullWidth isActive onClick={() => {}}>Active</Button>
        </div>,
    ),
);

stories.add(
    'With icon',
    storyWrapper(
        `
Use <code>icon</code> prop to add an icon. Use <code>iconPosition</code> to align icon left or right.
        `,
        <Button icon={<IconArrow />} onClick={() => {}}>Text with Icon</Button>,
        <div>
            <Button icon={<IconArrow />} onClick={() => {}}>Icon</Button>
            <Button icon={<IconArrow />} iconPosition="right" onClick={() => {}}>Icon</Button>
            <Button icon={<IconArrow />} iconPosition="right" type="clear" onClick={() => {}}>Clear button</Button>
            <Button icon={<IconArrow />} iconPosition="right" type="primary" onClick={() => {}}>Primary button</Button>
            <Button icon={<IconArrow />} iconPosition="right" isFullWidth onClick={() => {}}>Full width</Button>
        </div>,
    ),
);

stories.add(
    'With confirmation',
    storyWrapper(
        `
Add an extra confirmation step with <code>hasConfirm</code>
Use <code>confirmText</code> and <code>confirmedText</code> to customise the strings.
        `,
        <Button
            hasConfirm
            onClick={() => { console.log('Confirmed!'); }}  // eslint-disable-line
        >
            Click me
        </Button>,
        <div>
            <Button
                hasConfirm
                confirmText="Sure?"
                confirmedText="OK!"
                onClick={() => { console.log('Confirmed!'); }}  // eslint-disable-line
            >
                Customised
            </Button>
        </div>,
    ),
);
