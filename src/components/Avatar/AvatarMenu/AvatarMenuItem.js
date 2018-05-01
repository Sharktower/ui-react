import React, { Component } from 'react';
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
    onClick: PropTypes.func,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    icon: null,
    hasSpacer: false,
    onClick: null,
    style: null,
};

class AvatarMenuItem extends Component {
    handleClick = (event) => {
        const onClick = this.props.onClick || (() => {});
        onClick(event);
    }

    render = () => {
        const icon = this.props.icon ? (
            <span className="uir-avatar-menu-nav-icon">
                {this.props.icon}
            </span>
        ) : null;
        const spacer = this.props.hasSpacer ? (
            <span className="uir-avatar-menu-nav-spacer" />
        ) : null;
        return (
            <li
                className={cx(
                    'uir-avatar-menu-item',
                    this.props.className,
                )}
                style={this.props.style}
            >
                <span
                    onClick={this.handleClick}
                    onKeyDown={this.handleClick}
                    role="button"
                    tabIndex="0"
                >
                    {icon || spacer}
                    {this.props.children}
                </span>
            </li>
        );
    }
}

AvatarMenuItem.propTypes = propTypes;
AvatarMenuItem.defaultProps = defaultProps;

export default AvatarMenuItem;
