import React from 'react';
import PropTypes from 'prop-types';
import './user-card-tooltip.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    style: null,
};

function UserCardTooltip(props) {
    return (
        <div className="uir-avatar-user-card-tooltip" style={props.style}>
            {props.children}
        </div>
    );
}

UserCardTooltip.propTypes = propTypes;
UserCardTooltip.defaultProps = defaultProps;

export default UserCardTooltip;
