import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateFieldLinked from './DateFieldLinked';

const stories = storiesOf('Fields.DateFieldLinked', module);

stories.add(
    'Overview',
    storyWrapper(
        'DateFieldLinked combines two DateFields to allow you to select a date range.',
        <DateFieldLinked />,
    ),
);
