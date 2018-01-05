/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('Button.Button', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    '-demo-',
    withInfo(`
        Adjust props in the Knob panel of Storybook
    `)(() => (
        <Button
            onClick={action('clicked')}
            className={text('className', '')}
            isActive={boolean('isActive', false)}
            isFullWidth={boolean('isFullWidth', false)}
            isDisabled={boolean('isDisabled', false)}
            type={select('type', ['clear', 'default', 'primary'])}
        >
            {text('label', 'Custom label')}
        </Button>
    )),
);

stories.add(
    'active',
    withInfo(`
        Active buttons can be used to indicate button selection, for example as part of the Tabs component
    `)(() => <div><Button>Not active</Button><Button isActive>Active</Button></div>),
);

stories.add(
    'clear',
    withInfo(`
        Clear buttons, use type="clear"
    `)(() => (
        <div>
            <Button type="clear">Not active</Button>
            <Button type="clear">Not active</Button>
            <Button type="clear" isActive>Active</Button>
        </div>
    )),
);

stories.add(
    'primary',
    withInfo(`
        Primary buttons, use type="primary"
    `)(() => (
        <div>
            <Button type="primary">Not active</Button>
            <Button type="primary" isActive>Active</Button>
        </div>
    )),
);

stories.add(
    'with icon',
    withInfo(`
        Icons can be used as children, their size will be adjusted to match text size
    `)(() => (
        <div>
            <Button>Text with Icon <IconArrow /></Button>
            <Button><IconArrow /> Icon with text</Button>
            <Button type="clear">Clear button <IconArrow /></Button>
            <Button type="primary">Primary button <IconArrow /></Button>
        </div>
    )),
);
