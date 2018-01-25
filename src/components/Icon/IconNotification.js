import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType(),
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
            <g transform="translate(3 3)">
                <path fill="#f33061" d="M9 20.5C2.7 20.5-2.5 15.3-2.5 9S2.7-2.5 9-2.5 20.5 2.6 20.5 9c0 6.3-5.2 11.5-11.5 11.5zm0-21C3.8-.5-.5 3.8-.5 9s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5S14.2-.5 9-.5z" />
                <path fill="#f33061" d="M7.7 3.8h2.6v6.5H7.7z" />
                <path fill="#f33061" d="M7.7 11.6h2.6v2.6H7.7z" />
            </g>
        </svg>
    );
};

IconNotification.propTypes = propTypes;
IconNotification.defaultProps = defaultProps;

export default IconNotification;
