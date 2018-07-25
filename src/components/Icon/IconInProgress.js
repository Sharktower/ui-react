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

const IconInProgress = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-blocked-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-status', className)}
            style={style}
            viewBox="0 0 12 12"
            aria-labelledby={iconTitleId}
        >
            <g fill="none" fillRule="evenodd">
                <g transform="translate(0 1)">
                    <circle cx="5.5" cy="5.5" r="4" stroke="#2F2833" />
                    <path fill="#2F2833" d="M1.575.868L2.98 2.272l-.707.707L.868 1.576zM10.132 1.575L8.853 2.854l-.707-.708L9.425.868z" />
                </g>
                <path fill="#2F2833" d="M5 1h1v1H5zM7 0v1H4V0zM6.681 5.11l.707.708-1.414 1.414-.707-.707z" />
            </g>
        </svg>
    );
};

IconInProgress.propTypes = propTypes;
IconInProgress.defaultProps = defaultProps;

export default IconInProgress;
