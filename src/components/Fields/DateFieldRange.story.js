import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateFieldRange from './DateFieldRange';

const stories = storiesOf('Fields.DateFieldRange', module);

const startDate = new Date();
startDate.setDate(1);
const finishDate = new Date();
finishDate.setDate(10);

stories.add(
    'Overview',
    storyWrapper(
        `
DateFieldRange combines two DateFields to allow users to select a range of dates.

You can retrieve the selected date by passing a function to the \`onChange\` prop.

e.g. \`onChange={selectedDates => console.log(selectedDates)}\`

\`selectedDates\` will receive an array of \`Date\` objects.
`,
        <DateFieldRange
            rangeFromValue={startDate}
            rangeToValue={finishDate}
            onChange={selectedDates => console.log(selectedDates)} // eslint-disable-line no-console
        />,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        `
Provide a \`Date\` object to the \`rangeFromValue\` and \`rangeFromValue\` prop to set the initial date range.
`,
        <DateFieldRange
            rangeFromValue={startDate}
            rangeToValue={finishDate}
            onChange={selectedDates => console.log(selectedDates)} // eslint-disable-line no-console
        />,
    ),
);

stories.add(
    'Labels',
    storyWrapper(
        'Use `fromLabel` and `toLabel` to customise the input labels.',
        <DateFieldRange fromLabel="Start" toLabel="Finish" />,
    ),
);

const minDate = new Date();
minDate.setFullYear(2010);
const maxDate = new Date();
maxDate.setFullYear(2030);

stories.add(
    'Min and Max Date',
    storyWrapper(
        'Use `minDate` and `maxDate` to set the earliest and latest available dates.',
        <DateFieldRange minDate={minDate} maxDate={maxDate} />,
    ),
);

stories.add(
    'On Change',
    storyWrapper(
        `
Use \`onChange\` to handle date selection events.

e.g. \`onChange={selectedDates => console.log(selectedDates)}\`
`,
        <DateFieldRange
            label="Log Change"
            onChange={selectedDates => console.log(selectedDates)} // eslint-disable-line no-console
        />,
    ),
);
