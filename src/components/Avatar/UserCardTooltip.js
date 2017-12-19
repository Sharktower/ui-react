import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.element.isRequired,
};

function UserCardTooltip(props) {
    return (
        <div className="uir-avatar-user-card-toolip">
            {props.children}
        </div>
    );
}

UserCardTooltip.propTypes = propTypes;

export default UserCardTooltip;
