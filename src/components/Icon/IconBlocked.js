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

const IconBlocked = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-blocked-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-blocked', className)}
            style={style}
            viewBox="0 0 10 10"
            aria-labelledby={iconTitleId}
        >
            <g fill="none" fillRule="evenodd">
                <path fill="#FF1966" d="M2 2.707L2.707 2l5.657 5.657-.707.707z" />
                <circle cx="5" cy="5" r="4" stroke="#FF1966" />
            </g>
        </svg>
    );
};

IconBlocked.propTypes = propTypes;
IconBlocked.defaultProps = defaultProps;

export default IconBlocked;
