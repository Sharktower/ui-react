import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.css';

const propTypes = {
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
    /** Expand width 100% */
    isFluid: PropTypes.bool,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    /** Icon component to render on the right */
    rightIcon: PropTypes.node,
    /** Icon component to render on the right */
    leftIcon: PropTypes.node,
    tabIndex: PropTypes.number,
    /** style of the button "default", "primary", "clear", "circle" */
    skin: PropTypes.string,
    /** object of CSS rules, camelCased */
    style: PropTypes.shape,
};

const defaultProps = {
    className: '',
    skin: 'default',
    children: null,
    rightIcon: null,
    leftIcon: null,
    isFluid: false,
    isActive: false,
    isDisabled: false,
    tabIndex: 0,
    style: {},
    onClick: () => {},
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        const {
            className,
            skin,
            isFluid,
            isDisabled,
            isActive,
            rightIcon,
            leftIcon,
            children,
            tabIndex,
            onClick,
            style,
            ...extraProps
        } = this.props;

        if (isDisabled) {
            extraProps.disabled = true;
        }
        const Tag = extraProps.href ? 'a' : 'button';
        return (
            <Tag
                type="button"
                role="button"
                style={style}
                className={cx(
                    className,
                    'uir-button',
                    `uir-button-skin-${skin}`, {
                        'uir-button-fluid': isFluid,
                        'uir-button-active': isActive,
                        'uir-button-disabled': isDisabled,
                        'uir-button-has-right-icon': rightIcon,
                    },
                )}
                tabIndex={isDisabled ? -1 : tabIndex}
                onClick={this.handleClick}
                {...extraProps}
            >
                {leftIcon ? <span className="uir-button-left-icon">{leftIcon}</span> : null }
                {children}
                {rightIcon ? <span className="uir-button-right-icon">{rightIcon}</span> : null }
            </Tag>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
