/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconNotStarted from './IconNotStarted';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.NotStarted', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG not started icon
        `,
        <IconNotStarted title="Not Started" />,
    ),
);
