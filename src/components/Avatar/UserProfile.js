import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitialsPropType from '../../prop-types/initials';
import './user-profile.scss';

const propTypes = {
    name: PropTypes.string.isRequired,
    initials: InitialsPropType.isRequired,
    profileImage: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    profileImage: null,
    size: null,
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
        const componentClass = this.props.size
            ? `uir-avatar uir-avatar-${this.props.size}`
            : 'uir-avatar';
        const imageOrInitials = this.props.profileImage
            ? <img src={this.props.profileImage} alt={`${this.props.name} profile`} />
            : this.props.initials;
        return (
            <div
                className={componentClass}
                title={this.props.name}
                aria-label={`${this.props.name} avatar`}
                role="button"
                tabIndex={this.props.tabIndex}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                style={this.props.style}
            >
                {imageOrInitials}
            </div>
        );
    }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
