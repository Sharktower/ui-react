/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconClose from './IconClose';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Close', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG complete icon
        `,
        <IconClose />,
    ),
);
