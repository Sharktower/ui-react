import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../prop-types/style';
import AvatarMenuItem from './AvatarMenu/AvatarMenuItem';
import AvatarMenuNav from './AvatarMenu/AvatarMenuNav';
import './AvatarMenu.scss';

const propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.element.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    onMenuItemClick: PropTypes.func,
    open: PropTypes.bool,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    onMenuItemClick: null,
    open: false,
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
            <div className="avatar-menu-internals">
                <nav className="avatar-menu-user-nav">
                    user nav here
                </nav>
                <nav className="avatar-menu-project-nav">
                    {this.props.children}
                </nav>
            </div>
        );
    }

    render() {
        const avatar = this.props.avatar || null;
        return (
            <div
                className={cx(
                    'avatar-menu',
                    {
                        'avatar-menu--open': this.state.open,
                    },
                    this.props.className,
                )}
                style={this.props.style}
            >
                {avatar}
                {this.state.open ? this.renderMenuInternals() : null}
            </div>
        );
    }
}

AvatarMenu.propTypes = propTypes;
AvatarMenu.defaultProps = defaultProps;

AvatarMenu.Item = AvatarMenuItem;
AvatarMenu.Nav = AvatarMenuNav;

export default AvatarMenu;

/* eslint-disable max-len */

// const priorityIcon = (
//     <svg className="icon" viewBox="-4 0 32 24">
//         <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//             <g fillRule="nonzero">
//                 <polygon fill="#2f2833" points="12 19.5857864 16.7832395 14.802547 12.4460456 6.12815913 13 5 18 15 12 21 6 15 12 3 12.559017 4.11803399 7.21676051 14.802547" />
//             </g>
//         </g>
//     </svg>
// );
//
// const dashboardIcon = (
//     <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
//         <path fill="#2f2833" fillOpacity="0.5" transform="translate(0,0)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
//         <path fill="#2f2833" fillOpacity="1" transform="translate(7.8,4.5)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
//         <path fill="#2f2833" fillOpacity="0.2" transform="translate(15.46,0)" d="M8 1.155L1.206 5.077v7.846L8 16.845l6.794-3.922V5.077L8 1.155zM8 0l7.794 4.5v9L8 18 .206 13.5v-9L8 0z" />
//     </svg>
// );
//
// const projectIcon = (
//     <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-9 0 32 20">
//         <g stroke="none" strokeWidth="1" fillRule="evenodd">
//             <path d="M8,1.155 L1.206,5.077 L1.206,12.923 L8,16.845 L14.794,12.923 L14.794,5.077 L8,1.155 Z M8,0 L15.794,4.5 L15.794,13.5 L8,18 L0.206,13.5 L0.206,4.5 L8,0 Z" fillRule="nonzero" />
//         </g>
//     </svg>
// );

/* eslint-enable */
