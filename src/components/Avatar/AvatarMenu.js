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
    avatar: PropTypes.instanceOf(Avatar).isRequired,
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    onMenuItemClick: PropTypes.func,
    open: PropTypes.bool,
    position: PropTypes.string,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    onMenuItemClick: null,
    open: false,
    position: AvatarMenuPosition.RIGHT,
    style: null,
};

class AvatarMenu extends Component {
    state = {
        open: this.props.open,
    }

    handleAvatarClick = () => {
        this.setState({ open: !this.state.open });
    }

    handleChildClick = (event) => {
        this.setState({ open: false });
        const onMenuItemClick = this.props.onMenuItemClick || (() => {});
        onMenuItemClick(event);
    }

    augmentAvatar = avatar => (
        avatar ? React.cloneElement(
            avatar,
            {
                onClick: this.handleAvatarClick,
                size: AvatarSize.SM,
            },
        ) : null)

    augmentChildren = children => (
        React.Children.map(
            children,
            child => React.cloneElement(
                child,
                { onClick: this.handleChildClick },
            ),
        )
    );

    render = () => {
        const { avatar, children } = this.props;
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
                {this.augmentAvatar(avatar)}
                {this.state.open ? (
                    <div className="uir-avatar-menu-internals">
                        {this.augmentChildren(children)}
                    </div>
                ) : null}
            </nav>
        );
    }
}

AvatarMenu.propTypes = propTypes;
AvatarMenu.defaultProps = defaultProps;

AvatarMenu.Nav = AvatarMenuNav;
AvatarMenu.Item = AvatarMenuItem;

export default AvatarMenu;
