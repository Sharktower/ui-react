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
