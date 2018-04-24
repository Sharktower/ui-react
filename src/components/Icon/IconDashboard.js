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

const IconDashboard = ({
    className,
    style,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-dashboard-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-dashboard', className)}
            style={style}
            viewBox="0 0 32 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>Dashboard Icon</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <path className="uir-icon-fill-charcoal" fillOpacity="0.5" transform="translate(0,0)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
                    <path className="uir-icon-fill-charcoal" fillOpacity="1" transform="translate(7.8,4.5)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
                    <path className="uir-icon-fill-charcoal" fillOpacity="0.2" transform="translate(15.46,0)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
                </g>
            </g>
        </svg>
    );
};

IconDashboard.propTypes = propTypes;
IconDashboard.defaultProps = defaultProps;

export default IconDashboard;
