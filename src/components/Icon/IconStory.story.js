/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconStory from './IconStory';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Story', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG story icon
        `,
        <IconStory />,
        <div>
            <IconStory priority="none" />
            <IconStory priority="low" />
            <IconStory priority="medium" />
            <IconStory priority="high" />
            <IconStory isBlocked priority="high" />
            <IconStory isBlocked />
        </div>,
    ),
);
