import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import DateField from './DateField';
import { DateFieldRangePosition } from './TextFieldEnums';

const propTypes = {
    className: PropTypes.string,
    fromLabel: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    toLabel: PropTypes.string,
    style: StyleObjectPropType(),
    value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

const defaultProps = {
    className: '',
    fromLabel: 'From',
    maxDate: null,
    minDate: null,
    onChange: null,
    toLabel: 'To',
    style: null,
    value: [],
};

class DateFieldLinked extends Component {
    state = {
        selectedDates: this.props.value,
        hideFromDatePicker: false,
        hideToDatePicker: false,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ selectedDates: nextProps.value });
        }
    }

    handleChange = (selectedDates) => {
        this.setState({ selectedDates });
        const onChange = this.props.onChange || (() => {});
        onChange(this.state.selectedDates);
    }

    handleFromFocus = () => {
        this.setState({
            hideFromDatePicker: false,
            hideToDatePicker: true,
        });
    }

    handleToFocus = () => {
        this.setState({
            hideFromDatePicker: true,
            hideToDatePicker: false,
        });
    }

    render() {
        return (
            <div
                className={cx('uir-date-field-linked', this.props.className)}
                style={this.props.style}
            >
                <DateField
                    label={this.props.fromLabel}
                    forceHideCalendar={this.state.hideFromDatePicker}
                    isRange
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    onChange={this.handleChange}
                    onFocus={this.handleFromFocus}
                    rangePosition={DateFieldRangePosition.START}
                    value={this.state.selectedDates}
                />
                <DateField
                    label={this.props.toLabel}
                    forceHideCalendar={this.state.hideToDatePicker}
                    isRange
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    onChange={this.handleChange}
                    onFocus={this.handleToFocus}
                    rangePosition={DateFieldRangePosition.FINISH}
                    value={this.state.selectedDates}
                />
            </div>
        );
    }
}

DateFieldLinked.propTypes = propTypes;
DateFieldLinked.defaultProps = defaultProps;

export default DateFieldLinked;
