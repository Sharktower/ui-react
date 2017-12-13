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
    /** will show opaque and won't react to clicks because of "pointer-events:none" */
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    /** Content of the button, just a string label or more complex React components */
    children: PropTypes.node.isRequired,
    /** visual skin for the button: cta (Call to Action), clear (transparent) */
    skin: PropTypes.oneOf(['default', 'cta', 'clear']),
    /** object with camelCased CSS rules, e.g.  style={{ marginBottom: '-1px'}} */
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    className: '',
    skin: 'default',
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
        if (this.props.isDisabled) {
            e.preventDefault();
            return;
        }
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
