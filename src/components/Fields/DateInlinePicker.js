import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import flatpickr from 'flatpickr';
import StyleObjectPropType from '../../prop-types/style';
import './DateInlinePicker.scss';

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType(),
};

const defaultProps = {
    className: '',
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
        } = this.props;
        return (
            <div
                ref={(ref) => { this.divRef = ref; }}
                className={cx('uir-dateinlinepicker', className)}
                style={style}
            />
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default DateField;
