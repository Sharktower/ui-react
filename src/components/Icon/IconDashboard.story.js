/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconDashboard from './IconDashboard';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Dashboard', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG project icon
        `,
        <IconDashboard />,
    ),
);
