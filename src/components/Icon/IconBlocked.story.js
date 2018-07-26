/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconBlocked from './IconBlocked';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Blocked', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG blocked icon
        `,
        <IconBlocked />,
    ),
);
