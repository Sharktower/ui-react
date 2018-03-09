import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import TextField from './TextField';
import DateInlinePicker from './DateInlinePicker';
import Tooltip from '../Tooltip/Tooltip';
import { formatDate } from '../date-utils';
import { TooltipPosition } from '../Tooltip/TooltipEnums';
import { DateFieldRangePosition } from './TextFieldEnums';
import './DateField.scss';

const propTypes = {
    className: PropTypes.string,
    forceHideCalendar: PropTypes.bool,
    isRange: PropTypes.bool,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    rangePosition: PropTypes.oneOf([
        DateFieldRangePosition.START,
        DateFieldRangePosition.FINISH,
    ]),
    style: StyleObjectPropType(),
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    ]),
};

const defaultProps = {
    className: '',
    isRange: false,
    forceHideCalendar: false,
    maxDate: null,
    minDate: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    rangePosition: DateFieldRangePosition.START,
    style: null,
    value: null,
};

class DateField extends Component {
    state = {
        selectedDate: this.props.value,
        showDatePicker: false,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ selectedDate: nextProps.value });
        }
        if (this.props.forceHideCalendar !== nextProps.forceHideCalendar) {
            if (nextProps.forceHideCalendar) {
                this.setState({ showDatePicker: false });
            }
        }
    }

    clearInputAfterChange = (inputValue) => {
        if (inputValue === null || inputValue === '') {
            this.setState({ selectedDate: null });
        }
    }

    datePickerClose() {
        if (this.props.isRange === false ||
            (this.state.selectedDate && this.state.selectedDate.length === 2)
        ) {
            this.setState({
                showDatePicker: false,
            });
        }
    }

    datePickerOpen() {
        this.setState({
            showDatePicker: true,
        });
    }

    handleDatePickerChange = (selectedDates) => {
        const selectedDate = this.props.isRange ? selectedDates : selectedDates[0];
        this.setState({ selectedDate }, () => {
            this.datePickerClose();
        });
        const onChange = this.props.onChange || (() => {});
        onChange(selectedDate);
    }

    handleInputBlur = (event) => {
        this.datePickerClose();
        const onBlur = this.props.onBlur || (() => {});
        onBlur(event);
    }

    handleInputChange = (inputValue) => {
        this.clearInputAfterChange(inputValue);
        const onChange = this.props.onChange || (() => {});
        onChange(this.state.selectedDate);
    }

    handleInputFocus = (event) => {
        this.datePickerOpen();
        const onFocus = this.props.onFocus || (() => {});
        onFocus(event);
    }

    render() {
        const selectedDateToFormat = this.props.isRange && this.state.selectedDate ?
            this.state.selectedDate[this.props.rangePosition] :
            this.state.selectedDate;
        const formattedDate = selectedDateToFormat instanceof Date ?
            formatDate(selectedDateToFormat)
            : null;
        const datePicker = (<DateInlinePicker
            defaultDate={this.state.selectedDate || null}
            maxDate={this.props.maxDate}
            minDate={this.props.minDate}
            mode={this.props.isRange ? 'range' : 'single'}
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
