import React, { Component } from 'react';
import PropTypes from 'prop-types';
import initialsPropType from '../../prop-types/initials';

const propTypes = {
    name: PropTypes.string.isRequired,
    initials: initialsPropType.isRequired,
    profileImage: PropTypes.string,
    notificationCount: PropTypes.number,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onClick: PropTypes.func,
};

const defaultProps = {
    profileImage: null,
    notificationCount: 0,
    size: null,
    onClick: null,
};

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const propsOnClick = this.props.onClick;
        if (propsOnClick) {
            propsOnClick(event);
        }
    }

    render() {
        const componentClass = this.props.size
            ? `uir-avatar-${this.props.size}`
            : 'uir-avatar';
        const imageOrInitials = this.props.profileImage
            ? <img src={this.props.profileImage} alt={`${this.props.name} profile`} />
            : this.props.initials;
        const notificationCount = this.props.notificationCount
            ? <span className="notification-count">{this.props.notificationCount}</span>
            : null;
        return (
            <div
                className={componentClass}
                aria-label={`${this.props.name} avatar`}
                role="button"
                tabIndex={0}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
            >
                {imageOrInitials}
                {notificationCount}
            </div>
        );
    }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
