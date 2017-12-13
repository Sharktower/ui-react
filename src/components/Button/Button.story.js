/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('Button', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'full control',
    withInfo(`
        With a custom label
    `)(() => (
        <Button
            onClick={action('clicked')}
            className={text('className', '')}
            skin={select('skin', {
                default: 'default',
                clear: 'clear',
                cta: 'cta',
            }, 'default')}
            isActive={boolean('isActive', false)}
            isFluid={boolean('isFluid', false)}
            isDisabled={boolean('isDisabled', false)}
        >
            {text('label', 'Custom label')}
        </Button>
    )),
);

stories.add(
    'With left icon',
    withInfo(`
        With an Icon passed as children. If you need only an Icon, check IconButton component
    `)(() => <Button><IconArrow style={{ marginTop: '-3px' }} />Example</Button>),
);

stories.add(
    'With right icon',
    withInfo(`
        Right icon
    `)(() => <Button>Example<IconArrow style={{ marginTop: '-3px' }} /></Button>),
);

stories.add(
    'active',
    withInfo(`
        Active buttons can be used, as part of Tabs component for example
    `)(() => <div><Button>Not active</Button><Button isActive>Active</Button></div>),
);

stories.add(
    'clear button',
    withInfo(`
        Clear buttons
    `)(() => <div><Button skin="clear">Not active</Button><Button skin="clear" isActive>Active</Button></div>),
);

stories.add(
    'CTA button',
    withInfo(`
        Call to Action button. They don't have visual "active" state
    `)(() => <Button skin="cta">Test</Button>),
);
