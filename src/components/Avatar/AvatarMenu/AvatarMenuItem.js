import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';
import { proxyDataProps } from '../../../utils/data-props';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
    hasSpacer: PropTypes.bool,
    icon: PropTypes.element,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    icon: null,
    hasSpacer: false,
    style: null,
};

const AvatarMenuItem = (props) => {
    const icon = props.icon ? (
        <span className="uir-avatar-menu-nav-icon">
            {props.icon}
        </span>
    ) : null;
    const spacer = props.hasSpacer ? (
        <span className="uir-avatar-menu-nav-spacer" />
    ) : null;
    return (
        <li
            className={cx(
                'uir-avatar-menu-item',
                props.className,
            )}
            style={props.style}
            {...proxyDataProps(props)}
        >
            {icon || spacer}
            {props.children}
        </li>
    );
};

AvatarMenuItem.propTypes = propTypes;
AvatarMenuItem.defaultProps = defaultProps;

export default AvatarMenuItem;
