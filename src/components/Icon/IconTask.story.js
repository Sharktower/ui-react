/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconTask from './IconTask';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Task', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG task icon
        `,
        <IconTask title="Task" />,
        <div>
            <IconTask priority="none" />
            <IconTask priority="low" />
            <IconTask priority="medium" />
            <IconTask priority="high" />
            <IconTask isBlocked priority="high" />
            <IconTask isBlocked />
        </div>,
    ),
);
