/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconInProgress from './IconInProgress';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.InProgress', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG in progress icon
        `,
        <IconInProgress title="In Progress" />,
    ),
);
