/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('Button.IconButton', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);


stories.add(
    '-demo-',
    withInfo(`
        Adjust props in the Knob panel of Storybook
    `)(() => (
        <IconButton
            onClick={action('clicked')}
            className={text('className', '')}
            isActive={boolean('isActive', false)}
            isFullWidth={boolean('isFullWidth', false)}
            isDisabled={boolean('isDisabled', false)}
        >
            <IconArrow />
        </IconButton>
    )),
);

stories.add(
    'active',
    withInfo(`
        Active Icon Button
    `)(() => <IconButton isActive><IconArrow /></IconButton>),
);
