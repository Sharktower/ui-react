import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TextField.scss';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
};

const defaultProps = {
    className: null,
    label: null,
};

class TextField extends Component {
    uid = 'textfield'

    render() {
        /* eslint-disable jsx-a11y/label-has-for */
        return (
            <div className={cx('uir-textfield', this.props.className)}>
                <label htmlFor={this.uid} className="uir-textfield-label">{this.props.label}</label>
                <input id={this.uid} className="uir-textfield-input" />
            </div>
        );
        /* eslint-enable */
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
