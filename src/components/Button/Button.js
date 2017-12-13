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
    /** style of the button "default", "primary", "clear", "circle" */
    skin: PropTypes.string,
    /** object of CSS rules, camelCased */
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    className: '',
    skin: 'default',
    children: null,
    isFluid: false,
    isActive: false,
    isDisabled: false,
    style: {},
    onClick: () => {},
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleRef = this.handleRef.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    handleRef(node) {
        this.innerRef = node;
    }

    render() {
        const {
            className,
            skin,
            isFluid,
            isDisabled,
            isActive,
            children,
            onClick,
            style,
            ...extraProps
        } = this.props;

        if (isDisabled) {
            extraProps.disabled = isDisabled;
        }
        return (
            <button
                type="button"
                style={style}
                className={cx(
                    className,
                    'uir-button',
                    `uir-button-skin-${skin}`,
                    {
                        'uir-button-fluid': isFluid,
                        'uir-button-active': isActive,
                        'uir-button-disabled': isDisabled,
                    },
                )}
                ref={this.handleRef}
                onClick={this.handleClick}
                {...extraProps}
            >
                <span className="uir-button-content">
                    {children}
                </span>
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
