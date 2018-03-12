import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateField from './DateField';
import Button from '../Button/Button';

const stories = storiesOf('Fields.DateField', module);

class ChangeValueDemoComp extends Component {
    state = {
        value: null,
    }

    handleClick = () => {
        this.setState({
            value: new Date(),
        });
    }

    render() {
        return (
            <div>
                <DateField label="Date Field Label" value={this.state.value} />
                <Button onClick={this.handleClick}>Set to Today</Button>
            </div>
        );
    }
}

stories.add(
    'Overview',
    storyWrapper(
        `
DateField is a TextField input the allows users to select a date via a calendar interface (date picker).

Use the \`isRange\` prop to allow users to select a range, see this in action with the \`DateFieldLinked\` component.

You can retrieve the selected date by passing a function to the \`onChange\` prop.

e.g. \`onChange={selectedDate => console.log(selectedDate)}\`

\`selectedDate\` will receive either a single \`Date\` object or an array of \`Date\` objects if isRange is true.

_N.B. DateField also supports most of the TextField props too._
`,
        <DateField
            label="Today's Date"
            onChange={selectedDate => console.log(selectedDate)} // eslint-disable-line no-console
            value={new Date()}
        />,
        <div>
            <DateField label="Your Own Date" />
            <DateField label="Clearable Date" isClearable />
            <ChangeValueDemoComp />
        </div>,
    ),
);

stories.add(
    'Value',
    storyWrapper(
        `
Provide a \`Date\` object to the \`value\` prop to set the initial date.

You can also use \`rangeFromValue\` and \`rangeToValue\` with \`isRange\` to select a range of dates.
`,
        <DateField
            label="Today's Date"
            value={new Date()}
        />,
    ),
);

stories.add(
    'Min Date',
    storyWrapper(
        'Set the earliest available date with the `minDate` prop.',
        <DateField
            label="Future Dates Only"
            minDate={new Date()}
        />,
    ),
);

stories.add(
    'Max Date',
    storyWrapper(
        'Set the latest available date with the `maxDate` prop.',
        <DateField
            label="Past Dates Only"
            maxDate={new Date()}
        />,
    ),
);

stories.add(
    'On Blur',
    storyWrapper(
        `
Use \`onBlur\` to handle date change (selection or clear) events.

e.g. \`onBlur={event => console.log(event)}\`
`,
        <DateField
            label="Handle Blur"
            onBlur={() => {}}
        />,
    ),
);

stories.add(
    'On Change',
    storyWrapper(
        `
Use \`onChange\` to handle date change (selection or clear) events.

e.g. \`onChange={selectedDate => console.log(selectedDate)}\`
`,
        <DateField
            label="Log Change"
            onChange={selectedDate => console.log(selectedDate)} // eslint-disable-line no-console
        />,
        <DateField
            label="Log Clear Too"
            isClearable
            onChange={selectedDate => console.log(selectedDate)} // eslint-disable-line no-console
            value={new Date()}
        />,
    ),
);


stories.add(
    'On Focus',
    storyWrapper(
        `
Use \`onFocus\` to handle input focus events.

e.g. \`onFocus={event => console.log(event)}\`
`,
        <DateField
            label="Handle Focus"
            onFocus={() => {}}
        />,
    ),
);
