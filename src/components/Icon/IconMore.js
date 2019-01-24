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
    title: 'Icon More',
};

const IconMore = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-more-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-more', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <circle className="uir-icon-more-oval-1" cx="12" cy="3" r="2" />
            <circle className="uir-icon-more-oval-2" cx="12" cy="12" r="2" />
            <circle className="uir-icon-more-oval-3" cx="12" cy="21" r="2" />
        </svg>
    );
};

IconMore.propTypes = propTypes;
IconMore.defaultProps = defaultProps;

export default IconMore;
