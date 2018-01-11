/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Button.Button', module);

stories
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    '-demo-',
    storyWrapper(
        `
Button
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
    ),
);

stories.add(
    'active',
    storyWrapper(
        `
Active buttons can be used to indicate button selection, for example as part of the Tabs component
        `,
        <Button>Not active</Button>,
        <Button isActive>Active</Button>,
    ),
);

stories.add(
    'clear',
    storyWrapper(
        `
Clear buttons, use type="clear"
        `,
        <Button type="clear">Not active</Button>,
        <div>
            <Button type="clear">Not active</Button>
            <Button type="clear" isActive>Active</Button>
        </div>,
    ),
);

stories.add(
    'primary',
    storyWrapper(
        `
Primary buttons, use type="primary"
        `,
        <Button type="primary">Not active</Button>,
        <Button type="primary" isActive>Active</Button>,
    ),
);

stories.add(
    'with icon',
    storyWrapper(
        `
Icons can be used as children, their size will be adjusted to match text size
        `,
        <Button>Text with Icon <IconArrow /></Button>,
        <div>
            <Button><IconArrow /> Icon with text</Button>
            <Button type="clear">Clear button <IconArrow /></Button>
            <Button type="primary">Primary button <IconArrow /></Button>
        </div>,
    ),
);
