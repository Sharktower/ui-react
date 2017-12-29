import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Textfield.scss';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

function Textfield(props) {
    return (
        <div className={cx('uir-textfield', props.className)} />
    );
}

Textfield.propTypes = propTypes;
Textfield.defaultProps = defaultProps;

export default Textfield;
