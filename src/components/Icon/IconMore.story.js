/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconMore from './IconMore';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.More', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG "More" icon
Use this icon to indicate extra content, for example extra options in a menu.
        `,
        <IconMore title="More" />,
    ),
);
