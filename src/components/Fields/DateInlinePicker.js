import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import StyleObjectPropType from '../../prop-types/style';
import './DateInlinePicker.scss';

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

class DateInlinePicker extends Component {
    componentDidMount() {
        const {
            childRef,
            handleChange,
            props,
        } = this;
        const { ...options } = props;
        if (childRef) {
            flatpickr(childRef, {
                ...options,
                allowInput: true,
                inline: true,
                onChange: handleChange,
            });
        }
    }

    childRef = null

    handleChange = (selectedDates, ...args) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(selectedDates, ...args);
        }
    }

    render() {
        const {
            className,
            style,
        } = this.props;
        return (
            <div
                className={cx('uir-date-inline-picker', className)}
                style={style}
            >
                <span ref={(ref) => { this.childRef = ref; }} />
            </div>
        );
    }
}

DateInlinePicker.propTypes = propTypes;
DateInlinePicker.defaultProps = defaultProps;

export default DateInlinePicker;
