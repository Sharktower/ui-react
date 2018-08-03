import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import { TaskIconPriority } from './IconEnums';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType,
    priority: ListPropType([
        TaskIconPriority.NONE,
        TaskIconPriority.LOW,
        TaskIconPriority.MEDIUM,
        TaskIconPriority.HIGH,
    ]),
    isBlocked: PropTypes.bool,
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    priority: TaskIconPriority.NONE,
    isBlocked: false,
    title: 'Decision Icon',
};

const IconDecision = ({
    className,
    style,
    priority,
    isBlocked,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-decision-title-${lastInstanceId}`;
    return (
        <svg
            className={cx(
                'uir-icon uir-icon-decision',
                `uir-icon-decision--${priority}`,
                { 'uir-icon-decision--blocked': isBlocked },
                className,
            )}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <g fill="none" fill-rule="evenodd">
                <path className="uir-icon-line-a" d="M11.5 5.5v3h6.293l1.5-1.5-1.5-1.5H11.5z"/>
                <path className="uir-icon-line-c" d="M11.5 11.5v3h6.293l1.5-1.5-1.5-1.5H11.5z"/>
                <path className="uir-icon-line-b" d="M5.207 9.5l-1.5 1.501 1.5 1.499H11.5v-3H5.207z" />
                <path className="uir-icon-line-d" d="M11 4h1v16h-1z"/>
            </g>
        </svg>
    );
};

IconDecision.propTypes = propTypes;
IconDecision.defaultProps = defaultProps;

export default IconDecision;
