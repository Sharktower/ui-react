import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import DateField from './DateField';
import IconArrowLongRight from '../Icon/IconArrowLongRight';
import './DateFieldRange.scss';

const propTypes = {
    className: PropTypes.string,
    fromLabel: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    rangeFromValue: PropTypes.instanceOf(Date),
    rangeToValue: PropTypes.instanceOf(Date),
    style: StyleObjectPropType,
    toLabel: PropTypes.string,
};

const defaultProps = {
    className: null,
    fromLabel: 'From',
    maxDate: null,
    minDate: null,
    onChange: null,
    rangeFromValue: null,
    rangeToValue: null,
    style: null,
    toLabel: 'To',
};

class DateFieldRange extends Component {
    state = {
        rangeFromValue: this.props.rangeFromValue,
        rangeToValue: this.props.rangeToValue,
        hideFromDatePicker: false,
        hideToDatePicker: false,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.rangeFromValue !== nextProps.rangeFromValue) {
            this.setState({ rangeFromValue: nextProps.rangeFromValue });
        }
        if (this.props.rangeToValue !== nextProps.rangeToValue) {
            this.setState({ rangeToValue: nextProps.rangeToValue });
        }
    }

    handleChange = (selectedDates) => {
        this.setState({
            rangeFromValue: selectedDates.slice(0, 1).pop(),
            rangeToValue: selectedDates.slice(1, 2).pop(),
        });
        const onChange = this.props.onChange || (() => {});
        onChange(selectedDates);
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
                className={cx('uir-date-field-range', this.props.className)}
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
                    rangeFromValue={this.state.rangeFromValue}
                    rangeToValue={this.state.rangeToValue}
                    value={this.state.rangeFromValue}
                />
                <IconArrowLongRight />
                <DateField
                    label={this.props.toLabel}
                    forceHideCalendar={this.state.hideToDatePicker}
                    isRange
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    onChange={this.handleChange}
                    onFocus={this.handleToFocus}
                    rangeFromValue={this.state.rangeFromValue}
                    rangeToValue={this.state.rangeToValue}
                    value={this.state.rangeToValue}
                />
            </div>
        );
    }
}

DateFieldRange.propTypes = propTypes;
DateFieldRange.defaultProps = defaultProps;

export default DateFieldRange;
