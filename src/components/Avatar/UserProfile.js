import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import InitialsPropType from '../../prop-types/initials';
import './user-profile.scss';

const propTypes = {
    name: PropTypes.string.isRequired,
    initials: InitialsPropType.isRequired,
    profileImage: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['light', 'dark']),
    status: PropTypes.string,
    notification: PropTypes.bool,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    profileImage: null,
    size: null,
    theme: 'light',
    status: null,
    notification: false,
    onClick: null,
    tabIndex: 0,
    style: null,
};

class UserProfile extends Component {
    handleClick = (event) => {
        const propsOnClick = this.props.onClick;
        if (propsOnClick) {
            propsOnClick(event);
        }
    }

    render() {
        const sizeClass = this.props.size
            ? `uir-avatar-user-profile-${this.props.size}`
            : null;
        const imageOrInitials = this.props.profileImage
            ? <img src={this.props.profileImage} alt={`${this.props.name} profile`} />
            : this.props.initials;
        const notification = this.props.notification
            ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd" transform="translate(3 3)">
                        <circle cx="9" cy="9" r="8" stroke="#F33061" strokeWidth="2" />
                        <path fill="#F33061" d="M8 5h2v5H8zM8 11h2v2H8z" />
                    </g>
                </svg>
            )
            : null;
        const status = this.props.status || null;
        const notificationOrStatus = notification || status
            ? <span className="uir-avatar-user-status">{notification || status}</span>
            : null;
        return (
            <div
                className={cx('uir-avatar-user-profile', `uir-avatar-user-profile-${this.props.theme}`, sizeClass)}
                title={this.props.name}
                aria-label={`${this.props.name} avatar`}
                role="button"
                tabIndex={this.props.tabIndex}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                style={this.props.style}
            >
                <span className="uir-avatar-user-profile-inner">
                    {imageOrInitials}
                </span>
                {notificationOrStatus}
            </div>
        );
    }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
