import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
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

const IconNotStarted = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-blocked-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-not-started', className)}
            style={style}
            viewBox="0 0 12 12"
            aria-labelledby={iconTitleId}
        >
            <circle cx="10" cy="5" r="4.5" fill="none" fillRule="evenodd" stroke="#2F2833" transform="translate(-4 1)" />
        </svg>
    );
};

IconNotStarted.propTypes = propTypes;
IconNotStarted.defaultProps = defaultProps;

export default IconNotStarted;
