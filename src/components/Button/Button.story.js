/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
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
            isClear={boolean('isClear', false)}
            isFluid={boolean('isFluid', false)}
            isDisabled={boolean('isDisabled', false)}
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
        Clear buttons
    `)(() => (
        <div>
            <Button isClear>Not active</Button>
            <Button isClear>Not active</Button>
            <Button isClear isActive>Active</Button>
        </div>
    )),
);

stories.add(
    'with icon',
    withInfo(`
        Icons, or other elements passed as children might need small adjustments to centre them vertically
    `)(() => (
        <div>
            <Button isClear>Clear with Icon <IconArrow style={{ marginTop: -3 }} /></Button>
            <Button><IconArrow style={{ marginTop: -3 }} />Default with Icon</Button>
        </div>
    )),
);
