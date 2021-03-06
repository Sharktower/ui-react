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
    title: 'Arrow Icon',
};

const IconArrow = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-arrow-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-arrow', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <path d="M 13.1 15.319 L 21.9 6.521 L 23 7.621 L 14.2 16.42 L 13.1 15.319 Z  M 1 7.621 L 2.1 6.521 L 13.1 17.52 L 12 18.619 L 1 7.621 Z" fillRule="evenodd" />
        </svg>
    );
};

IconArrow.propTypes = propTypes;
IconArrow.defaultProps = defaultProps;

export default IconArrow;
