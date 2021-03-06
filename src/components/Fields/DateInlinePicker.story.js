import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateInlinePicker from './DateInlinePicker';

const stories = storiesOf('Fields.DateInlinePicker', module);

stories.add(
    'Overview',
    storyWrapper(
        `
DateInlinePicker is an inline date picker, primarily for use with DateField. The date picker we use is called \`flatpickr\`.

This component can take \`flatpickr\` config options as props, [read the docs here](https://flatpickr.js.org/options/).

Both \`flatpickr\` and this component pass an array of \`Date\` objects to the \`onChange\` callback.
`,
        <DateInlinePicker />,
    ),
);

stories.add(
    'Default Date',
    storyWrapper(
        'Use flatpickr\'s `defaultDate` prop to set the initial date.',
        <DateInlinePicker defaultDate={new Date()} />,
    ),
);

stories.add(
    'Range',
    storyWrapper(
        'Use flatpickr\'s `mode` prop to create a range.',
        <DateInlinePicker mode="range" />,
    ),
);

stories.add(
    'Change Event',
    storyWrapper(
        `
Use the \`onChange\` prop to add a change event callback.

e.g. \`onChange={dates => console.log(dates)}\`
`,
        <DateInlinePicker
            onChange={dates => console.log(dates)} // eslint-disable-line no-console
        />,
    ),
);
