import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateInlinePicker from './DateInlinePicker';

const stories = storiesOf('Fields.DateInlinePicker', module);

stories.add(
    'Overview',
    storyWrapper(
        'DateInlinePicker is an inline date picker, primarily for use with DateField.',
        <DateInlinePicker />,
    ),
);
