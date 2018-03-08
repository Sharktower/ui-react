import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateFieldLinked from './DateFieldLinked';

const stories = storiesOf('Fields.DateFieldLinked', module);

stories.add(
    'Overview',
    storyWrapper(
        'DateFieldLinked combines two DateFields to allow you to select a date range.',
        <DateFieldLinked fromLabel="Start" toLabel="Finish" />,
    ),
);

const minDate = new Date();
minDate.setFullYear(2010);
const maxDate = new Date();
minDate.setFullYear(2030);

stories.add(
    'Min and Max Date',
    storyWrapper(
        'Use minDate and maxDate to set the earliest and latest available dates.',
        <DateFieldLinked minDate={minDate} maxDate={maxDate} />,
    ),
);
