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
    title: 'In Progress Icon',
};

const IconInProgress = ({
    className,
    style,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-in-progress-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-in-progress', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path
                className="uir-icon-path"
                d="M21 6.2l-1.4-1.4L17.4 7c-1.3-1-2.8-1.7-4.5-1.9V3h1.9V1H9.1v2H11v2.1C9.4 5.3 7.8 6 6.6 7L4.4 4.7 3 6.2l2.2 2.3C4 10 3.3 11.9 3.3 14c0 5 3.9 9 8.7 9s8.7-4 8.7-9c0-2.1-.7-4-1.9-5.6L21 6.2zM12 21c-3.7 0-6.8-3.1-6.8-7S8.3 7 12 7s6.8 3.1 6.8 7-3.1 7-6.8 7z"
            />
            <path
                className="uir-icon-path"
                d="M11.5 14.1l1.4 1.4 2.8-2.9-1.4-1.4z"
            />
        </svg>
    );
};

IconInProgress.propTypes = propTypes;
IconInProgress.defaultProps = defaultProps;

export default IconInProgress;
