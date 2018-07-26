import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
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
    title: 'Not Started Icon',
};

const IconNotStarted = ({
    className,
    style,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-blocked-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-status', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path d="M12 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11
                11zm0-19.8c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z"
            />
        </svg>
    );
};

IconNotStarted.propTypes = propTypes;
IconNotStarted.defaultProps = defaultProps;

export default IconNotStarted;
