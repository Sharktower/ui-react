/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import IconKanban from './IconKanban';
import storyWrapper from '../../storybook-addons/storyWrapper';

const stories = storiesOf('Icon.Kanban', module);

stories.add(
    'Overview',
    storyWrapper(
        `
SVG kanban icon
        `,
        <IconKanban title="Kanban" />,
    ),
);
