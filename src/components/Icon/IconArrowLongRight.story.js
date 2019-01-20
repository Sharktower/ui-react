/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconArrowLongRight from './IconArrowLongRight';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.ArrowLongRight', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG arrow (long, right) icon
        `,
        <IconArrowLongRight title="Right Arrow" />,
    ),
);
