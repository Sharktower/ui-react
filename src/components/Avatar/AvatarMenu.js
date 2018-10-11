import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import AvatarMenuItem from './AvatarMenu/AvatarMenuItem';
import AvatarMenuNav from './AvatarMenu/AvatarMenuNav';
import { AvatarMenuPosition } from './AvatarMenu/AvatarMenuEnums';
import { AvatarSize } from './AvatarEnums';
import './AvatarMenu.scss';

const propTypes = {
    avatar: PropTypes.element.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
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

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleClick();
        }
    }

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
            {...proxyDataProps(this.props)}
        >
            {this.augmentAvatar(this.props.avatar)}
            {this.state.open ? (
                <div
                    className="uir-avatar-menu-internals"
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyDown}
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
