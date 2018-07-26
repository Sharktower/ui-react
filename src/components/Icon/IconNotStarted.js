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
            <circle cx="10" cy="5" r="4.5" fill="none" fillRule="evenodd" stroke="#2F2833" transform="translate(-4 1)" />
        </svg>
    );
};

IconNotStarted.propTypes = propTypes;
IconNotStarted.defaultProps = defaultProps;

export default IconNotStarted;
