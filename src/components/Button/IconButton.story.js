/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';

const stories = storiesOf('IconButton', module);

stories
    .addDecorator(withKnobs)
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);

stories.add(
    'default',
    withInfo(`
        Default
    `)(() => (
        <IconButton
            isDisabled={boolean('isDisabled', false)}
            onClick={action('onClick')}
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
