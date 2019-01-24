/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconNotification from './IconNotification';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Notification', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG notification icon
        `,
        <IconNotification title="Notification" />,
    ),
);
