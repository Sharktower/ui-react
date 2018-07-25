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
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    priority: 'MEDIUM',
    blocked: false,
    title: 'Story Icon',
};

const IconTask = ({
    className,
    style,
    priority,
    blocked,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-task-title-${lastInstanceId}`;

    if (blocked) {
        return (
            <svg
                className={cx('uir-icon uir-icon-task uir-icon-task-blocked', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <title id={iconTitleId}>{title}</title>
                <g fill="#FF1966" fillRule="evenodd">
                    <path d="M13 8h6v1h-6zM5 12h14v1H5zM5 16h14v1H5z" />
                    <path fillRule="nonzero" d="M5.354 7.646l-.708.708L7 10.707l4.354-4.353-.708-.708L7 9.293z" />
                </g>
            </svg>
        );
    } else if (priority === 'LOW') {
        return (
            <svg
                className={cx('uir-icon uir-icon-task uir-icon-task-low', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <title id={iconTitleId}>{title}</title>
                <g fill="#2F2833" fillRule="evenodd">
                    <path d="M13 8h6v1h-6z" />
                    <path d="M5 12h14v1H5zM5 16h14v1H5z" opacity=".3" />
                    <path fillRule="nonzero" d="M5.354 7.646l-.708.708L7 10.707l4.354-4.353-.708-.708L7 9.293z" />
                </g>
            </svg>
        );
    } else if (priority === 'MEDIUM') {
        return (
            <svg
                className={cx('uir-icon uir-icon-task uir-icon-task-medium', className)}
                style={style}
                viewBox="0 0 24 24"
                aria-labelledby={iconTitleId}
            >
                <title id={iconTitleId}>{title}</title>
                <g fill="#2F2833" fillRule="evenodd">
                    <path d="M13 8h6v1h-6zM5 12h14v1H5z" />
                    <path d="M5 16h14v1H5z" opacity=".3" />
                    <path fillRule="nonzero" d="M5.354 7.646l-.708.708L7 10.707l4.354-4.353-.708-.708L7 9.293z" />
                </g>
            </svg>
        );
    }
    return (
        <svg
            className={cx('uir-icon uir-icon-task uir-icon-task-high', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <g fill="#2F2833" fillRule="evenodd">
                <path d="M13 8h6v1h-6zM5 12h14v1H5zM5 16h14v1H5z" />
                <path fillRule="nonzero" d="M5.354 7.646l-.708.708L7 10.707l4.354-4.353-.708-.708L7 9.293z" />
            </g>
        </svg>
    );
};

IconTask.propTypes = propTypes;
IconTask.defaultProps = defaultProps;

export default IconTask;
