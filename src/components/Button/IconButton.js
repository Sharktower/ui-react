import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';
import './IconButton.scss';


const propTypes = {
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

const IconButton = ({
    className,
    ...extraProps
}) => (
    <Button
        {...extraProps}
        className={cx('uir-icon-button', className)}
        isFullWidth={false}
    />
);

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
