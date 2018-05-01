import React, { Component } from 'react';
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
    onClick: PropTypes.func,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    onClick: null,
    style: null,
};

class AvatarMenuNav extends Component {
    handleChildClick = (event) => {
        const onClick = this.props.onClick || (() => {});
        onClick(event);
    }

    augmentChildren = children => (
        React.Children.map(
            children,
            child => React.cloneElement(
                child,
                { onClick: this.handleChildClick },
            ),
        )
    );

    render = () => (
        <ul
            className={cx(
                'uir-avatar-menu-nav',
                this.props.className,
            )}
            style={this.props.style}
        >
            {this.augmentChildren(this.props.children)}
        </ul>
    )
}

AvatarMenuNav.propTypes = propTypes;
AvatarMenuNav.defaultProps = defaultProps;

export default AvatarMenuNav;
