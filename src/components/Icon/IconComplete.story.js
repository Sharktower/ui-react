/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconComplete from './IconComplete';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Complete', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG complete icon
        `,
        <IconComplete title="Complete" />,
    ),
);
