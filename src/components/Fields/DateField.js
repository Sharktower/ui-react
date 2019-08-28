import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import { proxyDataProps } from '../../utils/data-props';
import TextField from './TextField';
import DateInlinePicker from './DateInlinePicker';
import Tooltip from '../Tooltip/Tooltip';
import { formatDate } from '../date-utils';
import { TooltipPosition } from '../Tooltip/TooltipEnums';
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
    rangeFromValue: PropTypes.instanceOf(Date),
    rangeToValue: PropTypes.instanceOf(Date),
    style: StyleObjectPropType,
    datePickerPosition: ListPropType([
        TooltipPosition.TOP_CENTER,
        TooltipPosition.TOP_LEFT,
        TooltipPosition.TOP_RIGHT,
        TooltipPosition.BOTTOM_CENTER,
        TooltipPosition.BOTTOM_RIGHT,
        TooltipPosition.BOTTOM_LEFT,
        TooltipPosition.RIGHT,
        TooltipPosition.LEFT,
    ]),
    value: PropTypes.instanceOf(Date),
};

const defaultProps = {
    className: null,
    forceHideCalendar: false,
    isRange: false,
    maxDate: null,
    minDate: null,
    onBlur: null,
    onChange: null,
    onFocus: null,
    rangeFromValue: null,
    rangeToValue: null,
    style: null,
    datePickerPosition: TooltipPosition.BOTTOM_CENTER,
    value: null,
};

class DateField extends Component {
    state = {
        value: this.props.value,
        rangeFromValue: this.props.rangeFromValue,
        rangeToValue: this.props.rangeToValue,
        showDatePicker: false,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ value: nextProps.value });
        }
        if (this.props.rangeFromValue !== nextProps.rangeFromValue) {
            this.setState({ rangeFromValue: nextProps.rangeFromValue });
        }
        if (this.props.rangeToValue !== nextProps.rangeToValue) {
            this.setState({ rangeToValue: nextProps.rangeToValue });
        }
        if (this.props.forceHideCalendar !== nextProps.forceHideCalendar) {
            if (nextProps.forceHideCalendar) {
                this.setState({ showDatePicker: false });
            }
        }
    }

    datePickerClose() {
        if (this.props.isRange === false ||
            (this.state.rangeFromValue && this.state.rangeToValue)
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
        const onChange = this.props.onChange || (() => {});
        this.setState({
            value: selectedDates.slice(0, 1).pop(),
            rangeFromValue: selectedDates.slice(0, 1).pop(),
            rangeToValue: selectedDates.slice(1, 2).pop(),
        }, () => {
            this.datePickerClose();
            onChange(this.props.isRange ?
                [this.state.rangeFromValue, this.state.rangeToValue] :
                this.state.value);
        });
    }

    handleInputBlur = (event) => {
        this.datePickerClose();
        const onBlur = this.props.onBlur || (() => {});
        onBlur(event);
    }

    handleInputChange = (inputValue) => {
        const onChange = this.props.onChange || (() => {});
        if (inputValue === null || inputValue === '') {
            this.setState({
                value: null,
                rangeFromValue: null,
                rangeToValue: null,
            }, () => {
                onChange(this.state.value);
            });
        } else {
            onChange(this.state.value);
        }
    }

    handleInputFocus = (event) => {
        this.datePickerOpen();
        const onFocus = this.props.onFocus || (() => {});
        onFocus(event);
    }

    render() {
        const datePickerValues = this.props.isRange ?
            [this.state.rangeFromValue, this.state.rangeToValue] :
            this.state.value;
        const formattedDate = this.state.value instanceof Date ?
            formatDate(this.state.value)
            : null;
        const datePicker = (<DateInlinePicker
            defaultDate={datePickerValues}
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
                {...proxyDataProps(this.props)}
            >
                <Tooltip
                    tooltip={datePicker}
                    showTooltip={this.state.showDatePicker}
                    position={this.props.datePickerPosition}
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
