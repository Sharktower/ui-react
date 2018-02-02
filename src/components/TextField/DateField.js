import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
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

// on focus 

class DateField extends Component {
    handleFocus = () => {
        console.log('change fired');
    }

    render() {
        const {
            className,
            style,
            ...textFieldProps
        } = this.props;
        return (
            <div
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
