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

const IconCalendar = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-calendar-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-calendar', className)}
            style={style}
            viewBox="0 0 16 16"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Calendar Icon</title>
            <rect className="uir-icon-path-stroke uir-icon-calendar-outer" x="1.5" y="2" width="13" height="11" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-nub-left" x="4.5" y="1" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-nub-right" x="10.5" y="1" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-top-left" x="4.5" y="7" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-top-middle" x="7.5" y="7" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-top-right" x="10.5" y="7" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-bottom-left" x="4.5" y="10" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-bottom-middle" x="7.5" y="10" width="1" height="1" />
            <rect className="uir-icon-path-stroke uir-icon-calendar-box-bottom-right" x="10.5" y="10" width="1" height="1" />
        </svg>
    );
};

IconCalendar.propTypes = propTypes;
IconCalendar.defaultProps = defaultProps;

export default IconCalendar;
