/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconRequired from './IconRequired';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Required', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG required icon
        `,
        <IconRequired title="Required" />,
    ),
);
