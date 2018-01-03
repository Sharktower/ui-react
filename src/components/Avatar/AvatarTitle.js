import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import './AvatarTitle.scss';

const propTypes = {
    avatar: PropTypes.element,
    className: PropTypes.string,
    jobRole: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: ListPropType(['sm', 'lg']),
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    avatar: null,
    className: null,
    jobRole: null,
    size: 'sm',
    style: null,
};

function AvatarCard(props) {
    const name = <div className="uir-avatar-title-name">{props.name}</div>;
    const jobRole = props.jobRole
        ? <div className="uir-avatar-title-job-role">{props.jobRole}</div>
        : null;
    const profile = props.avatar
        ? <div className="uir-avatar-title-profile">{props.avatar}</div>
        : null;
    return (
        <div
            className={cx(
                'uir-avatar-title',
                `uir-avatar-title--${props.size}`,
                props.className,
            )}
            style={props.style}
        >
            {profile}
            <div>
                {name}
                {jobRole}
            </div>
        </div>
    );
}

AvatarCard.propTypes = propTypes;
AvatarCard.defaultProps = defaultProps;

export default AvatarCard;
