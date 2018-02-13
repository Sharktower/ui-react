import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import { AvatarTitleSize } from './AvatarEnums';
import './AvatarTitle.scss';

const propTypes = {
    avatar: PropTypes.element,
    className: PropTypes.string,
    jobRole: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: ListPropType([
        AvatarTitleSize.SM,
        AvatarTitleSize.LG,
    ]),
    style: StyleObjectPropType(),
};

const defaultProps = {
    avatar: null,
    className: null,
    jobRole: null,
    size: AvatarTitleSize.SM,
    style: null,
};

function AvatarTitle(props) {
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

AvatarTitle.propTypes = propTypes;
AvatarTitle.defaultProps = defaultProps;

export default AvatarTitle;
