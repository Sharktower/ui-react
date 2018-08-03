/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconDecision from './IconDecision';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Decision', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG decision icon
        `,
        <IconDecision />,
        <div>
            <IconDecision priority="none" />
            <IconDecision priority="low" />
            <IconDecision priority="medium" />
            <IconDecision priority="high" />
            <IconDecision isBlocked priority="high" />
            <IconDecision isBlocked />
        </div>,
    ),
);
