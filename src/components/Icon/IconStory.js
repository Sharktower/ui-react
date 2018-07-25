import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType,
    priority: PropTypes.string,
    blocked: PropTypes.bool,
};

const defaultProps = {
    className: null,
    style: null,
    priority: 'MEDIUM',
    blocked: false,
};

const IconStory = ({
    className,
    style,
    priority,
    blocked,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-story-title-${lastInstanceId}`;

    if (blocked) {
        return (
            <svg
                className={cx('uir-icon uir-icon-story uir-icon-story-blocked', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <g fill="#FF1966" fillRule="evenodd">
                    <path d="M13 8h6v1h-6zM5 12h14v1H5zM5 16h14v1H5zM5 5h5v1H5zM5 7h5v1H5zM5 9h5v1H5zM5 6h1v1H5zM9 8h1v1H9z" />
                </g>
            </svg>
        );
    } else if (priority === 'LOW') {
        return (
            <svg
                className={cx('uir-icon uir-icon-story uir-icon-story-low', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <g fill="#2F2833" fillRule="evenodd">
                    <path d="M13 8h6v1h-6z" />
                    <path d="M5 12h14v1H5zM5 16h14v1H5z" opacity=".3" />
                    <path d="M5 5h5v1H5zM5 7h5v1H5zM5 9h5v1H5zM5 6h1v1H5zM9 8h1v1H9z" />
                </g>
            </svg>
        );
    } else if (priority === 'MEDIUM') {
        return (
            <svg
                className={cx('uir-icon uir-icon-story uir-icon-story-medium', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <g fill="#2F2833" fillRule="evenodd">
                    <path d="M13 8h6v1h-6zM5 12h14v1H5z" />
                    <path d="M5 16h14v1H5z" opacity=".3" />
                    <path d="M5 5h5v1H5zM5 7h5v1H5zM5 9h5v1H5zM5 6h1v1H5zM9 8h1v1H9z" />
                </g>
            </svg>
        );
    }
    return (
        <svg
            className={cx('uir-icon uir-icon-story uir-icon-story-high', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <g fill="#2F2833" fillRule="evenodd">
                <path d="M13 8h6v1h-6zM5 12h14v1H5zM5 16h14v1H5zM5 5h5v1H5zM5 7h5v1H5zM5 9h5v1H5zM5 6h1v1H5zM9 8h1v1H9z" />
            </g>
        </svg>
    );
};

IconStory.propTypes = propTypes;
IconStory.defaultProps = defaultProps;

export default IconStory;
