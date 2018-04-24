import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../prop-types/style';
import AvatarMenuItem from './AvatarMenu/AvatarMenuItem';
import AvatarMenuNav from './AvatarMenu/AvatarMenuNav';
import { AvatarMenuPosition } from './AvatarMenu/AvatarMenuEnums';
import Avatar from './Avatar';
import { AvatarSize } from './AvatarEnums';
import './AvatarMenu.scss';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    name: PropTypes.string.isRequired,
    onMenuItemClick: PropTypes.func,
    open: PropTypes.bool,
    position: PropTypes.string,
    src: PropTypes.string,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    onMenuItemClick: null,
    open: false,
    position: AvatarMenuPosition.RIGHT,
    src: null,
    style: null,
};

class AvatarMenu extends Component {
    state = {
        open: this.props.open,
    }

    handleAvatarClick = () => {
        this.setState({ open: !this.state.open });
    }

    handleMenuItemClick = (path) => {
        this.setState({ open: false });
        const onMenuItemClick = this.props.onMenuItemClick || (() => {});
        onMenuItemClick(path);
    }

    renderMenuInternals() {
        return (
            <div className="uir-avatar-menu-internals">
                {this.props.children}
            </div>
        );
    }

    render() {
        return (
            <nav
                className={cx(
                    'uir-avatar-menu',
                    {
                        'uir-avatar-menu--open': this.state.open,
                    },
                    `uir-avatar-menu--${this.props.position}`,
                    this.props.className,
                )}
                style={this.props.style}
            >
                <Avatar
                    name={this.props.name}
                    onClick={this.handleAvatarClick}
                    size={AvatarSize.SM}
                    src={this.props.src}
                />
                {this.state.open ? this.renderMenuInternals() : null}
            </nav>
        );
    }
}

AvatarMenu.propTypes = propTypes;
AvatarMenu.defaultProps = defaultProps;

AvatarMenu.Nav = AvatarMenuNav;
AvatarMenu.Item = AvatarMenuItem;

export default AvatarMenu;
