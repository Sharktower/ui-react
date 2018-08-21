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
    title: 'Epic Icon',
};

const IconEpic = ({
    className,
    style,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-epic-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-epic', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path d="M22 20.5H2L7.6 8.4l2.2 4.9 4.4-9.7L22 20.5zM3.8 19.3h16.4l-6-13.1-4.4 9.7L7.6 11l-3.8 8.3z" />
        </svg>
    );
};

IconEpic.propTypes = propTypes;
IconEpic.defaultProps = defaultProps;

export default IconEpic;
