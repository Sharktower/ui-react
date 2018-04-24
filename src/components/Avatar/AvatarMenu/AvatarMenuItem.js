import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    icon: PropTypes.element,
    hasSpacer: PropTypes.boolean,
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
        >
            {icon || spacer}
            {props.children}
        </li>
    );
};

AvatarMenuItem.propTypes = propTypes;
AvatarMenuItem.defaultProps = defaultProps;

export default AvatarMenuItem;
