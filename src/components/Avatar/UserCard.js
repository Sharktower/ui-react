import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import UserCardTooltip from './UserCardTooltip';
import './user-card.scss';

const propTypes = {
    profile: PropTypes.instanceOf(UserProfile).isRequired,
    children: PropTypes.element.isRequired,
    showTooltip: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    showTooltip: null,
    style: null,
};

class UserCard extends Component {
    state = {
        showTooltip: false,
    }

    handleFocus = () => this.setState({ showTooltip: true })

    handleBlur = () => this.setState({ showTooltip: false })

    render() {
        const showTooltip = this.props.showTooltip !== null
            ? this.props.showTooltip
            : this.state.showTooltip;
        const tooltip = showTooltip
            ? <UserCardTooltip>{this.props.children}</UserCardTooltip>
            : null;
        return (
            <div
                className="uir-avatar-user-card"
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={this.props.style}
            >
                {this.props.profile}
                {tooltip}
            </div>
        );
    }
}

UserCard.propTypes = propTypes;
UserCard.defaultProps = defaultProps;

export default UserCard;
