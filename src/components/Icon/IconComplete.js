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
    title: 'Complete Icon',
};

const IconComplete = ({
    className,
    style,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-complete-title-${lastInstanceId}`;
    return (
        <svg
            className={cx('uir-icon uir-icon-complete', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path
                className="uir-icon-path"
                d="M18.4 5.2zM18.9 10.3c.6 2.8-.3 5.7-2.4 7.6-3.3 3-8.4 2.8-11.4-.5s-2.8-8.3.5-11.3S14 3.3 17 6.6l1.4-1.4c-2.7-2.9-6.9-3.9-10.7-2.6-5.2 1.8-8 7.5-6.2 12.7 1.8 5.2 7.6 8 12.8 6.2s8-7.5 6.2-12.7l-1.6 1.5z"
            />
            <path
                className="uir-icon-path"
                d="M21.6 3.5l-10 9.9-4.2-4.3-1.5 1.5 4.3 4.2.1.1 1.3 1.3L23 4.9z"
            />
        </svg>
    );
};

IconComplete.propTypes = propTypes;
IconComplete.defaultProps = defaultProps;

export default IconComplete;
