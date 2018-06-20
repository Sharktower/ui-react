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
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Calendar Icon</title>
            <g>
                <path className="uir-icon-path-fill uir-icon-calendar-outer" d="M23,22H1V3.5h22V22z M2.6,20.5h18.9V5.1H2.6V20.5z" />
                <rect className="uir-icon-path-fill uir-icon-calendar-nub-left" x="5.7" y="2" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-nub-right" x="15.1" y="2" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-top-left" x="5.7" y="11.2" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-top-middle" x="10.4" y="11.2" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-top-right" x="15.1" y="11.2" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-bottom-left" x="5.7" y="15.8" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-bottom-middle" x="10.4" y="15.8" width="3.1" height="3.1" />
                <rect className="uir-icon-path-fill uir-icon-calendar-box-bottom-right" x="15.1" y="15.8" width="3.1" height="3.1" />
            </g>
        </svg>
    );
};

IconCalendar.propTypes = propTypes;
IconCalendar.defaultProps = defaultProps;

export default IconCalendar;
