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

const IconRequired = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-search-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-required', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Required Icon</title>
            <path d="M2 16.4l1.4 2.5 2.3-1.4L4.4 15zM22 7.7l-1.3-2.4-2.4 1.4 1.4 2.4zM5.7
              6.7L3.3 5.3 2 7.7l2.3 1.4zM18.3 17.5l2.3 1.4 1.4-2.5-2.4-1.4zM10.7
              20.1h2.9V23h-2.9zM10.7 1h2.9v2.9h-2.9z"
            />
        </svg>
    );
};

IconRequired.propTypes = propTypes;
IconRequired.defaultProps = defaultProps;

export default IconRequired;
