import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    style: null,
};

const IconNotification = ({
    className,
    style,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-notification-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-notification', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>Notification Icon</title>
            <path d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.6 23.5 12c0 6.3-5.2 11.5-11.5 11.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5z" />
            <path d="M10.5 6h3v7.5h-3V6zm0 9h3v3h-3v-3z" />
        </svg>
    );
};

IconNotification.propTypes = propTypes;
IconNotification.defaultProps = defaultProps;

export default IconNotification;
