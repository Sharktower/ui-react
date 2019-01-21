/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconSearch from './IconSearch';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Search', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG search icon
        `,
        <IconSearch title="Search" />,
    ),
);
