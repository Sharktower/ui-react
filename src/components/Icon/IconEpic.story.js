/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconEpic from './IconEpic';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Epic', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG project icon
        `,
        <IconEpic />,
    ),
);
