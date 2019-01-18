/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconProject from './IconProject';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Project', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG project icon
        `,
        <IconProject title="Project" />,
    ),
);
