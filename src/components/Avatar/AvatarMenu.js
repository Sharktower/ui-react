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
    open: PropTypes.bool,
    position: PropTypes.string,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
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

    handleClick = () => this.setState({ open: false })

    augmentAvatar = avatar => (
        avatar ? React.cloneElement(
            avatar,
            {
                onClick: this.handleAvatarClick,
                size: AvatarSize.SM,
            },
        ) : null)

    render = () => (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        /* added onClick and onKeyDown below without role
            to handle state not user interaction */
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
            {this.augmentAvatar(this.props.avatar)}
            {this.state.open ? (
                <div
                    className="uir-avatar-menu-internals"
                    onClick={this.handleClick}
                    onKeyDown={this.handleClick}
                >
                    {this.props.children}
                </div>
            ) : null}
        </nav>
        /* eslint-enable */
    )
}

AvatarMenu.propTypes = propTypes;
AvatarMenu.defaultProps = defaultProps;

AvatarMenu.Nav = AvatarMenuNav;
AvatarMenu.Item = AvatarMenuItem;

export default AvatarMenu;
