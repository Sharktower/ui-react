import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
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
    title: 'Search Icon',
};

const IconSearch = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-search-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-search', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <g>
                <path transform="rotate(-45.001 -47.337 -476.979)" d="M-351.6-81.4h1v6.5h-1z" />
                <path transform="translate(371 98)" d="M-361.5-79.8c-4.8 0-8.7-3.9-8.7-8.7s3.9-8.7 8.7-8.7 8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7zm0-16.4c-4.2 0-7.7 3.5-7.7 7.7s3.5 7.7 7.7 7.7 7.7-3.5 7.7-7.7-3.4-7.7-7.7-7.7z" />
            </g>
        </svg>
    );
};

IconSearch.propTypes = propTypes;
IconSearch.defaultProps = defaultProps;

export default IconSearch;
