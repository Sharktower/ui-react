/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const IconArrow = ({
    width,
    height,
    className,
    style,
}) => (
    <svg
        className={cx('uir-icon uir-icon-arrow', className)}
        width={width}
        height={height}
        style={style}
        viewBox="0 0 24 24"
    >
        <path d="M 13.1 15.319 L 21.9 6.521 L 23 7.621 L 14.2 16.42 L 13.1 15.319 Z  M 1 7.621 L 2.1 6.521 L 13.1 17.52 L 12 18.619 L 1 7.621 Z" fillRule="evenodd" />
    </svg>
);

IconArrow.defaultProps = {
    width: 24,
    height: 24,
    className: '',
    style: {},
};

IconArrow.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

export default IconArrow;
