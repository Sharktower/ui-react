import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import TextField from './TextField';
import DateInlinePicker from './DateInlinePicker';
import Tooltip from '../Tooltip/Tooltip';
import { TooltipPosition } from '../Tooltip/TooltipEnums';
import './DateField.scss';

// @TODO: earliest available date
// @TODO: latest available date

// @TODO: example linked fields, from-to

const propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    style: StyleObjectPropType(),
    value: PropTypes.instanceOf(Date),
};

const defaultProps = {
    className: '',
    onChange: null,
    style: null,
    value: null,
};

class DateField extends Component {
    state = {
        showDatePicker: false,
        selectedDate: this.props.value,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ selectedDate: nextProps.value });
        }
    }

    formatDate = (date) => {
        if (!date) {
            return date;
        }
        const dateGroupsRegex = /\w{3} (\w{3}) (\d{2}) (\d{4}) .+/;
        return date.toString().replace(dateGroupsRegex, '$2 $1 $3');
    }

    handleInputBlur = () => {
        this.setState({
            showDatePicker: false,
        });
    }

    clearInputAfterChange = (inputValue) => {
        if (inputValue === null || inputValue === '') {
            this.setState({ selectedDate: null });
        }
    }

    handleInputChange = (inputValue) => {
        this.clearInputAfterChange(inputValue);
        const onChange = this.props.onChange || (() => {});
        onChange(this.state.selectedDate);
    }

    handleDatePickerChange = (selectedDates) => {
        this.setState({
            selectedDate: selectedDates[0],
        });
        const onChange = this.props.onChange || (() => {});
        onChange(selectedDates[0]);
    }

    handleInputFocus = () => {
        this.setState({
            showDatePicker: true,
        });
    }

    render() {
        const formattedDate = this.formatDate(this.state.selectedDate);
        const datePicker = (<DateInlinePicker
            defaultDate={this.state.selectedDate || null}
            onChange={this.handleDatePickerChange}
        />);
        const {
            className,
            style,
            ...textFieldProps
        } = this.props;
        return (
            <div
                ref={(ref) => { this.divRef = ref; }}
                className={cx('uir-date-field', className)}
                style={style}
            >
                <Tooltip
                    tooltip={datePicker}
                    showTooltip={this.state.showDatePicker}
                    position={TooltipPosition.BOTTOM_LEFT}
                >
                    <TextField
                        {...textFieldProps}
                        isReadOnly
                        onBlur={this.handleInputBlur}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        value={formattedDate || ''}
                    />
                </Tooltip>
            </div>
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default DateField;
