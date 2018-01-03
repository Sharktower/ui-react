import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import InitialsPropType from '../../prop-types/initials';
import ListPropType from '../../prop-types/list';
import './Avatar.scss';

const propTypes = {
    className: PropTypes.string,
    hasHalo: PropTypes.bool,
    hasNotification: PropTypes.bool,
    initials: InitialsPropType,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    size: ListPropType(['xs', 'sm', 'md', 'lg']),
    src: PropTypes.string,
    status: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
    tabIndex: PropTypes.number,
    theme: ListPropType(['light', 'dark']),
};

const defaultProps = {
    className: null,
    hasHalo: false,
    hasNotification: false,
    initials: null,
    onClick: null,
    size: 'md',
    src: null,
    status: null,
    style: null,
    tabIndex: 0,
    theme: 'light',
};

class Avatar extends Component {
    handleClick = (event) => {
        const propsOnClick = this.props.onClick;
        if (propsOnClick) {
            propsOnClick(event);
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick(event);
        }
    }

    // NB: try not to rely on this fn
    //  in the future it may be removed
    calculateInitials = name => (name ? name.match(/\b\w/g).slice(0, 3).join('') : '?')

    render() {
        const imageOrInitials = this.props.src
            ? <img src={this.props.src} alt={`${this.props.name} profile`} />
            : this.props.initials || this.calculateInitials(this.props.name);
        const notificationSVG = this.props.hasNotification
            ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" transform="translate(3 3)">
                        <circle cx="9" cy="9" r="8" stroke="#F33061" />
                        <path fill="#F33061" d="M8 5h2v5H8zm0 6h2v2H8z" />
                    </g>
                </svg>
            )
            : null;
        const status = this.props.status || null;
        const notificationOrStatus = notificationSVG || status
            ? <span className="uir-avatar-user-status">{notificationSVG || status}</span>
            : null;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        // disabling aria role lint rule to allow for ternary operator
        return (
            <div
                className={cx(
                    'uir-avatar',
                    `uir-avatar--${this.props.theme}`,
                    `uir-avatar--${this.props.size}`,
                    { 'uir-avatar--interactive': this.props.onClick },
                    { 'uir-avatar--halo': this.props.hasHalo },
                    this.props.className,
                )}
                aria-label={this.props.name}
                role={this.props.onClick ? 'button' : 'img'}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                tabIndex={this.props.tabIndex}
                style={this.props.style}
            >
                <span className="uir-avatar-inner">
                    {imageOrInitials}
                </span>
                {notificationOrStatus}
            </div>
        );
        /* eslint-enable */
    }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
