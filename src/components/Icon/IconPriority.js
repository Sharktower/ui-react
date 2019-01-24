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
    title: 'Priority Icon',
};

const IconPriority = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-priority-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-priority', className)}
            style={style}
            viewBox="0 1 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <polygon className="uir-icon-path-fill" points="12 19.5857864 16.7832395 14.802547 12.4460456 6.12815913 13 5 18 15 12 21 6 15 12 3 12.559017 4.11803399 7.21676051 14.802547" />
                </g>
            </g>
        </svg>
    );
};

IconPriority.propTypes = propTypes;
IconPriority.defaultProps = defaultProps;

export default IconPriority;
