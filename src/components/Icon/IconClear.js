import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    className: '',
    style: null,
};

const IconClear = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-clear-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-clear', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Clear Icon</title>
            <path d="M12 10.6L7.2 5.8 5.8 7.2l4.8 4.8-4.8 4.8 1.4 1.4 4.8-4.8 4.8 4.8 1.4-1.4-4.8-4.8 4.8-4.8-1.4-1.4-4.8 4.8zM12 .5C18.3.5 23.5 5.6 23.5 12c0 6.3-5.1 11.5-11.5 11.5C5.7 23.5.5 18.4.5 12 .5 5.7 5.7.5 12 .5z" fill="#2f2833" />
        </svg>
    );
};

IconClear.propTypes = propTypes;
IconClear.defaultProps = defaultProps;

export default IconClear;
