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

const IconNotification = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-notification-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-notification', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Notification Icon</title>
            <g>
                <path transform="rotate(-45.001 -47.337 -476.979)" fill="#2f2833" d="M-351.6-81.4h1v6.5h-1z" />
                <path transform="translate(371 98)" fill="#2f2833" d="M-361.5-79.8c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7zm0-16.4c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7-3.4-7.7-7.7-7.7z" />
            </g>
        </svg>
    );
};

IconNotification.propTypes = propTypes;
IconNotification.defaultProps = defaultProps;

export default IconNotification;
