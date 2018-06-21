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
    title: 'Calendar Icon',
};

const IconKanban = ({
    className,
    style,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-calendar-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-kanban', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <path d="M22.5,21.5h-4.7v-3.6h4.7V21.5z M19,20.3h2.3v-1.2H19V20.3z M6.2,21.5H1.5v-3.6h4.7V21.5z M2.7,20.3H5v-1.2H2.7 V20.3z M22.5,16.8h-4.7v-3.6h4.7V16.8z M19,15.6h2.3v-1.2H19V15.6z M14.3,16.8H9.7v-3.6h4.7V16.8z M10.8,15.6h2.3v-1.2h-2.3V15.6z M6.2,16.8H1.5v-3.6h4.7V16.8z M2.7,15.6H5v-1.2H2.7V15.6z M22.5,12h-4.7V8.4h4.7V12z M19,10.8h2.3V9.6H19V10.8z M14.3,12H9.7V8.4 h4.7V12z M10.8,10.8h2.3V9.6h-2.3V10.8z M6.2,12H1.5V8.4h4.7V12z M2.7,10.8H5V9.6H2.7V10.8z M22.5,7.2h-21V2.5h21V7.2z M2.7,6.1 h18.7V3.7H2.7V6.1z" />
        </svg>
    );
};

IconKanban.propTypes = propTypes;
IconKanban.defaultProps = defaultProps;

export default IconKanban;
