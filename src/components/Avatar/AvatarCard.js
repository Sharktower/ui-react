import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './AvatarCard.scss';

const propTypes = {
    name: PropTypes.string.isRequired,
    jobRole: PropTypes.string,
    team: PropTypes.string,
    avatar: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    jobRole: null,
    team: null,
    avatar: null,
    className: null,
    style: null,
};

function AvatarCard(props) {
    const name = <div className="uir-avatar-card-name">{props.name}</div>;
    const jobRole = props.jobRole
        ? <div className="uir-avatar-card-job-role">{props.jobRole}</div>
        : null;
    const team = props.team
        ? <div className="uir-avatar-card-team">{props.team}</div>
        : null;
    const profile = props.avatar
        ? <div className="uir-avatar-card-profile">{props.avatar}</div>
        : null;
    return (
        <div
            className={cx(
                'uir-avatar-card',
                { 'uir-avatar-card-has-role': jobRole },
                { 'uir-avatar-card-has-team': team },
                { 'uir-avatar-card-has-profile': profile },
                props.className,
            )}
            style={props.style}
        >
            {profile}
            <div>
                {name}
                {jobRole}
                {team}
            </div>
        </div>
    );
}

AvatarCard.propTypes = propTypes;
AvatarCard.defaultProps = defaultProps;

export default AvatarCard;
