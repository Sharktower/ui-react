import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import TextField from './TextField';
import DateInlinePicker from './DateInlinePicker';
import Tooltip from '../Tooltip/Tooltip';
import { TooltipPosition } from '../Tooltip/TooltipEnums';
import './DateField.scss';

// @TODO: initial date prop
// @TODO: tooltip position prop
// @TODO: show selected date in input

const propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    style: StyleObjectPropType(),
};

const defaultProps = {
    className: '',
    onChange: null,
    style: null,
};

class DateField extends Component {
    state = {
        showDatePicker: false,
        selectedDate: null,
    }

    formatDate = (date) => {
        if (date instanceof Date) {
            const findDateGroups = new RegExp(/\w{3} (\w{3}) (\d{2}) (\d{4}) .+/);
            const reorderDateGroups = new RegExp(/$2 $1 $3/);
            return date.toString().replace(findDateGroups, reorderDateGroups);
        }
        return date;
    }

    handleInputBlur = () => {
        this.setState({
            showDatePicker: false,
        });
    }

    handleDatePickerChange = (selectedDates) => {
        const onChange = this.props.onChange || (() => {});
        this.setState({
            selectedDate: selectedDates[0],
        });
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
            defaultDate={this.state.selectedDate}
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
