import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';
import './PrimaryButton.scss';


const propTypes = {
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

const PrimaryButton = ({
    className,
    ...extraProps
}) => (
    <Button
        {...extraProps}
        className={cx('uir-PrimaryButton', className)}
        isClear={false}
    />
);

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
