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
    title: 'Close Icon',
};

const IconClose = ({ className, style, title }) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-close-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-close', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <g fill="#2F2833" fillRule="evenodd">
                <path d="M5.136 17.157l12.02-12.021.708.707-12.02 12.021z" />
                <path d="M5.136 5.843l.707-.707 5.657 5.657-.707.707zM12.207 12.914l.707-.707 4.95 4.95-.707.707z" />
            </g>
        </svg>
    );
};

IconClose.propTypes = propTypes;
IconClose.defaultProps = defaultProps;

export default IconClose;
