import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired,
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
