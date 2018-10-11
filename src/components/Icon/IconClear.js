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
};

const defaultProps = {
    className: null,
    style: null,
};

const IconClear = ({
    className,
    style,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-clear-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-clear', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>Clear Icon</title>
            <path d="M12 10.6L7.2 5.8 5.8 7.2l4.8 4.8-4.8 4.8 1.4 1.4 4.8-4.8 4.8 4.8 1.4-1.4-4.8-4.8 4.8-4.8-1.4-1.4-4.8 4.8zM12 .5C18.3.5 23.5 5.6 23.5 12c0 6.3-5.1 11.5-11.5 11.5C5.7 23.5.5 18.4.5 12 .5 5.7 5.7.5 12 .5z" />
        </svg>
    );
};

IconClear.propTypes = propTypes;
IconClear.defaultProps = defaultProps;

export default IconClear;
