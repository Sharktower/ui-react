import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './AvatarCard.scss';

const propTypes = {
    avatar: PropTypes.element,
    className: PropTypes.string,
    jobRole: PropTypes.string,
    name: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
    team: PropTypes.string,
};

const defaultProps = {
    avatar: null,
    className: null,
    jobRole: null,
    style: null,
    team: null,
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
                { 'uir-avatar-card--has-role': jobRole },
                { 'uir-avatar-card--has-team': team },
                { 'uir-avatar-card--has-profile': profile },
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
