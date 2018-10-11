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
    title: 'Kanban Icon',
};

const IconKanban = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-calendar-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-kanban', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <g className="uir-icon-path-stroke" fillRule="evenodd">
                <path d="M10.5 7.5h4v9h-4zM3.5 7.5h4v13h-4zM17.5 7.5h4v5h-4zM10.5 4.5h4v1h-4zM3.5 4.5h4v1h-4zM17.5 4.5h4v1h-4z" />
            </g>
        </svg>
    );
};

IconKanban.propTypes = propTypes;
IconKanban.defaultProps = defaultProps;

export default IconKanban;
