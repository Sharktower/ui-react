import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';
import { proxyDataProps } from '../../../utils/data-props';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
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
        {...proxyDataProps(props)}
    >
        {props.children}
    </ul>
);

AvatarMenuNav.propTypes = propTypes;
AvatarMenuNav.defaultProps = defaultProps;

export default AvatarMenuNav;
