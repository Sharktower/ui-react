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
            <g transform="translate(637 326)">
                <g transform="translate(2 1)">
                    <g transform="scale(-1 1) rotate(30 -7.464 -12.428)">
                        <path d="M379.7-590.3h2.8v-2.8h-2.8z" />
                        <path d="M399.2-590.3h2.8v-2.8h-2.8z" />
                    </g>
                    <g transform="rotate(30 -3.464 2.5)">
                        <path transform="rotate(90.001 -712.017 39.449)" d="M-713.4 38.1h2.8v2.8h-2.8z" />
                        <path transform="rotate(90.001 -692.5 39.45)" d="M-693.9 38.1h2.8v2.8h-2.8z" />
                    </g>
                    <g transform="matrix(0 -1 -1 0 4.5 8.5)">
                        <path transform="rotate(-90 313.64 631.612)" d="M312.2 633h2.8v-2.8h-2.8z" />
                        <path transform="rotate(-90 333.157 631.612)" d="M331.8 633h2.8v-2.8h-2.8z" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

IconRequired.propTypes = propTypes;
IconRequired.defaultProps = defaultProps;

export default IconRequired;
