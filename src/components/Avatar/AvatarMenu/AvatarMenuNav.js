import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    location: PropTypes.string.isRequired,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    style: null,
};

const AvatarMenuNav = props => (
    <ul
        className={cx(
            'uir-avatar-menu-nav',
            `uir-avatar-menu-nav--${props.location}`,
            props.className,
        )}
        style={props.style}
    >
        {props.children}
    </ul>
);

AvatarMenuNav.propTypes = propTypes;
AvatarMenuNav.defaultProps = defaultProps;

export default AvatarMenuNav;
