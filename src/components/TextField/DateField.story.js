import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateField from './DateField';

const stories = storiesOf('TextField.DateField', module);

stories.add(
    'Overview',
    storyWrapper(
        'DateField is a TextField input with a date picker.',
        <DateField label="Date field label" />,
    ),
);
