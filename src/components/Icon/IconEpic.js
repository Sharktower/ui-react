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
    const iconTitleId = `icon-project-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-project', className)}
            style={style}
            viewBox="-4 -1 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path fill="none" fillRule="evenodd" stroke="#2F2833" d="M20.191 18.5L14 6.118l-4 8-2-4L3.809 18.5h16.382z" />
        </svg>
    );
};

IconEpic.propTypes = propTypes;
IconEpic.defaultProps = defaultProps;

export default IconEpic;
