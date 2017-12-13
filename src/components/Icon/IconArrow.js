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
        <path fill="#2F2833" d="M12.778 14.72l5.657-5.656.707.707-5.657 5.657zM5 9.771l.707-.707 7.071 7.071-.707.707z" fillRule="evenodd"/>
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
    style: PropTypes.objectOf(PropTypes.object),
};

export default IconArrow;
