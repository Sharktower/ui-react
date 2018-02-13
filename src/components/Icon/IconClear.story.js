/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconClear from './IconClear';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Clear', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG clear icon
        `,
        <IconClear />,
    ),
);
