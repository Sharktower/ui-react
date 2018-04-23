import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StyleObjectPropType from '../../../prop-types/style';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    style: null,
};

const AvatarMenuItem = props => (
    <li
        className={cx(
            'uir-avatar-menu',
            props.className,
        )}
        style={props.style}
    >
        {props.children}
    </li>
);

AvatarMenuItem.propTypes = propTypes;
AvatarMenuItem.defaultProps = defaultProps;

export default AvatarMenuItem;
