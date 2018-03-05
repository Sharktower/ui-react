import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import storyWrapper from '../../storybook-addons/storyWrapper';
import DateField from './DateField';
import { DateFieldRangePosition } from './TextFieldEnums';
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
        'DateField is a TextField input the allows users to select a date via a date picker.',
        <DateField
            label="Today's Date"
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
    'Range',
    storyWrapper(
        `
Use the isRange prop to create a range DateField.

You can also use the rangePosition prop to display the start or end date from the range.
`,
        <DateField
            isRange
            label="Range Selector"
            rangePosition={DateFieldRangePosition.START}
        />,
        <div>
            <DateField
                isRange
                label="Show Start Only"
                rangePosition={DateFieldRangePosition.START}
            />
            <DateField
                isRange
                label="Show Finish Only"
                rangePosition={DateFieldRangePosition.FINISH}
            />
        </div>,
    ),
);

stories.add(
    'Min Date',
    storyWrapper(
        'Set the earliest available date with the minDate prop.',
        <DateField
            label="Future Dates Only"
            minDate={new Date()}
        />,
    ),
);

stories.add(
    'Max Date',
    storyWrapper(
        'Set the latest available date with the maxDate prop.',
        <DateField
            label="Past Dates Only"
            maxDate={new Date()}
        />,
    ),
);
