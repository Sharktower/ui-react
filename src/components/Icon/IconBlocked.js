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
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    title: 'Blocked Icon',
};

const IconBlocked = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-blocked-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-blocked', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8.6 11c0 1.9-.7 3.7-1.7 5.1L6.9 5.2c1.4-1.1 3.2-1.7 5.1-1.7 4.7-.1 8.6 3.8 8.6 8.5zM3.4 12c0-1.9.7-3.7 1.7-5.1L17 18.8c-1.4 1.1-3.2 1.7-5.1 1.7-4.6.1-8.5-3.8-8.5-8.5z" />
        </svg>
    );
};

IconBlocked.propTypes = propTypes;
IconBlocked.defaultProps = defaultProps;

export default IconBlocked;
