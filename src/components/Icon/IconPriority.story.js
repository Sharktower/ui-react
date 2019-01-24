/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconPriority from './IconPriority';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Priority', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG project icon
        `,
        <IconPriority title="Priority" />,
    ),
);
