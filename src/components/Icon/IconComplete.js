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
    title: 'Complete Icon',
};

const IconComplete = ({
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
            viewBox="0 0 12 12"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <g fill="#2F2833" fillRule="evenodd">
                <path
                    fillRule="nonzero"
                    d="M9.662 2.595l-.708.708a4 4 0 1 0 .96 1.868l.811-.81a5 5 0 1 1-1.063-1.765z"
                />
                <path d="M5.577 7.405l5.656-5.657.708.707-5.657 5.657z" />
                <path d="M3.455 5.283l.707-.707 2.122 2.121-.707.708z" />
            </g>
        </svg>
    );
};

IconComplete.propTypes = propTypes;
IconComplete.defaultProps = defaultProps;

export default IconComplete;
