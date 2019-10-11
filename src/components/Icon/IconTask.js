import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import { proxyDataProps } from '../../utils/data-props';
import { IconPriority } from './IconEnums';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    isBlocked: PropTypes.bool,
    priority: ListPropType([
        IconPriority.NONE,
        IconPriority.LOW,
        IconPriority.MEDIUM,
        IconPriority.HIGH,
    ]),
    style: StyleObjectPropType,
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    priority: IconPriority.NONE,
    isBlocked: false,
    title: 'Task Icon',
};

const IconTask = ({
    className,
    style,
    priority,
    isBlocked,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-task-title-${lastInstanceId}`;
    return (
        <svg
            className={cx(
                'uir-icon uir-icon-task',
                `uir-icon-task--${priority}`,
                { 'uir-icon-task--blocked': isBlocked },
                className,
            )}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <rect x="13.2" y="6.2" className="uir-icon-line-a" width="8.5" height="1.5" />
            <rect x="2" y="13.2" className="uir-icon-line-b" width="20" height="1.5" />
            <rect x="2" y="19.2" className="uir-icon-line-c" width="20" height="1.5" />
            <polygon className="uir-icon-shape" points="3.4,6.3 2.5,7.2 5.7,10.5 11.5,4.5 10.6,3.5 5.7,8.5 " />
        </svg>
    );
};

IconTask.propTypes = propTypes;
IconTask.defaultProps = defaultProps;

export default IconTask;
