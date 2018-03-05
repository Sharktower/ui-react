import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import DateField from './DateField';
import { DateFieldRangePosition } from './TextFieldEnums';

const propTypes = {
    className: PropTypes.string,
    dateRange: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    fromLabel: PropTypes.string,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    toLabel: PropTypes.string,
    style: StyleObjectPropType(),
};

const defaultProps = {
    className: '',
    dateRange: [],
    fromLabel: 'From',
    maxDate: null,
    minDate: null,
    onChange: null,
    toLabel: 'To',
    style: null,
};

class DateFieldLinked extends Component {
    state = {
        selectedDates: this.props.dateRange,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.dateRange !== nextProps.dateRange) {
            this.setState({ selectedDates: nextProps.dateRange });
        }
    }

    handleChange = (selectedDates) => {
        this.setState({ selectedDates });
        const onChange = this.props.onChange || (() => {});
        onChange(this.state.selectedDates);
    }

    render() {
        return (
            <div
                className={cx('uir-date-field-linked', this.props.className)}
                style={this.props.style}
            >
                <DateField
                    label={this.props.fromLabel}
                    isRange
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    onChange={this.handleChange}
                    rangePosition={DateFieldRangePosition.START}
                    value={this.state.selectedDates}
                />
                <DateField
                    label={this.props.toLabel}
                    isRange
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    onChange={this.handleChange}
                    rangePosition={DateFieldRangePosition.FINISH}
                    value={this.state.selectedDates}
                />
            </div>
        );
    }
}

DateFieldLinked.propTypes = propTypes;
DateFieldLinked.defaultProps = defaultProps;

export default DateFieldLinked;
