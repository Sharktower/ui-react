/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './IconButton';
import IconArrow from '../Icon/IconArrow';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Button.IconButton', module);

stories
    .addDecorator(story => <div id="uir-root-preview">{story()}</div>);


stories.add(
    '-demo-',
    storyWrapper(
        `
Adjust props in the Knob panel of Storybook
        `,
        <IconButton
            onClick={() => { alert('it works!'); }} // eslint-disable-line
            className="className"
            isActive={false}
            isFullWidth={false}
            isDisabled={false}
        >
            <IconArrow />
        </IconButton>,
    ),
);

stories.add(
    'active',
    storyWrapper(
        `
Active Icon Button
        `,
        <IconButton isActive><IconArrow /></IconButton>,
    ),
);
