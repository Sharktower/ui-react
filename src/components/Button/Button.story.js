import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from './Button';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('Button', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'default',
    withInfo(`
        With a custom label
    `)(() => (
        <Button
            isDisabled={boolean('isDisabled', false)}
            onClick={action('clicked')}
        >
            {text('label', 'Custom label')}
        </Button>
    )),
);

stories.add(
    'right icon',
    withInfo(`
        With right Icon
    `)(() => <Button rightIcon={<IconArrow />}>Dropdown</Button>),
);

stories.add(
    'right & left icon',
    withInfo(`
        Two icons
    `)(() => <Button leftIcon={<IconArrow />} rightIcon={<IconArrow />}>Dropdown</Button>),
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
        Clear button
    `)(() => <div><Button skin="clear">Not active</Button><Button skin="clear" isActive>Active</Button></div>),
);

stories.add(
    'primary buttons',
    withInfo(`
        Primary buttons don't have "active" state.
    `)(() => <Button skin="primary">Test</Button>),
);

stories.add(
    'with href',
    withInfo(`
        When href is present, it will render as <a href="link"></a> element, not button
    `)(() => <div><Button>No Link</Button><Button href="https://mudano.com">With Link</Button></div>),
);

stories.add(
    'circle',
    withInfo(`
        When href is present, it will render as <a href="link"></a> element, not button
    `)(() => <div><Button skin="circle">H</Button><Button skin="circle"><IconArrow /></Button></div>),
);

