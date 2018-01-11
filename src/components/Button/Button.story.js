/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';
import Tooltip from '../Tooltip/Tooltip';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Button.Button', module);

stories
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

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
            <Button isDisabled>Disabled</Button>
            <Button isActive>Active</Button>
            <Button type="clear">Clear</Button>
            <Button type="primary">Primary</Button>
            <Button><IconArrow /> Icon</Button>
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
        <Button isActive>Active</Button>,
        <div>
            <Button isActive>Active</Button>
            <Button>Not active</Button>
        </div>,
    ),
);

stories.add(
    'Clear',
    storyWrapper(
        `
Clear buttons, use type="clear"
        `,
        <Button type="clear">Not active</Button>,
        <div>
            <Button type="clear">Clear not active</Button>
            <Button type="clear" isActive>Clear active</Button>
        </div>,
    ),
);

stories.add(
    'Primary',
    storyWrapper(
        `
Primary buttons should be used for main calls to action, use <code>type="primary"</code>
        `,
        <Button type="primary">Not active</Button>,
        <div>
            <Button type="primary">Not active</Button>
            <Button type="primary" isActive>Active</Button>
        </div>,
    ),
);

stories.add(
    'Full width',
    storyWrapper(
        `
Full width buttons, use <code>isFullWidth</code>
        `,
        <Button isFullWidth>Full width button</Button>,
        <div>
            <Button isFullWidth type="clear">Clear</Button>
            <Button isFullWidth type="primary">Primary</Button>
            <Button isFullWidth isActive>Active</Button>
        </div>,
    ),
);

stories.add(
    'With icon',
    storyWrapper(
        `
Icons can be used as children, their size will be adjusted to match button text size

For example:

    <Button>Text with Icon <IconArrow /></Button>
        `,
        <Button>Text with Icon <IconArrow /></Button>,
        <div>
            <Button><IconArrow /> Icon with text</Button>
            <Button type="clear">Clear button <IconArrow /></Button>
            <Button type="primary">Primary button <IconArrow /></Button>
            <Button isFullWidth><IconArrow /> Full width</Button>
        </div>,
    ),
);
