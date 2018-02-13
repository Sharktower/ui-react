import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import StyleObjectPropType from '../../prop-types/style';
import TextField from './TextField';
import './DateField.scss';

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
    componentDidMount() {
        flatpickr(this.divRef);
    }

    render() {
        const {
            className,
            style,
            ...textFieldProps
        } = this.props;
        return (
            <div
                ref={(ref) => { this.divRef = ref; }}
                className={cx('uir-datefield', className)}
                style={style}
            >
                <TextField onFocus={this.handleFocus} {...textFieldProps} />
            </div>
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default DateField;
