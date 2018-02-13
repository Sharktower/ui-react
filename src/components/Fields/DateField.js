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
    date: PropTypes.number,
    finishDate: PropTypes.number,
    startDate: PropTypes.number,
    style: StyleObjectPropType(),
};

const defaultProps = {
    className: '',
    date: null,
    finishDate: null,
    startDate: null,
    style: null,
};

class DateField extends Component {
    state = {
        showDatePicker: false,
        selectedDate: null,
    }

    handleBlur = () => {
        this.setState({
            showDatePicker: false,
        });
    }

    handleDateChange = (selectedDates) => {
        this.setState({
            selectedDate: selectedDates[0],
        });
    }

    handleFocus = () => {
        this.setState({
            showDatePicker: true,
        });
    }

    render() {
        const datePicker = (<DateInlinePicker
            defaultDate={this.state.selectedDate}
            onChange={this.handleDateChange}
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
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                    />
                </Tooltip>
            </div>
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default DateField;
