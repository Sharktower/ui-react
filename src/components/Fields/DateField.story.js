import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateField from './DateField';

const stories = storiesOf('Fields.DateField', module);

stories.add(
    'Overview',
    storyWrapper(
        'DateField is a TextField input the allows users to select a date via a date picker.',
        <DateField
            label="Today's Date"
            value={new Date()}
        />,
        <div>
            <DateField label="Your Own Date" />
            <DateField label="Clearable Date" isClearable />
        </div>,
    ),
);
