import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const propTypes = {
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
    /** width 100% */
    isFluid: PropTypes.bool,
    /** transparent button */
    isClear: PropTypes.bool,
    /** for styling purposes */
    isActive: PropTypes.bool,
    /** set disabled HTML attribute, custom styling and will prevent onClick from firing */
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    /** Content of the button, e.g. a string label or more complex React components */
    children: PropTypes.node.isRequired,
    /** object with camelCased CSS rules, e.g.  style={{ marginTop: -1}} */
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    className: '',
    isFluid: false,
    isClear: false,
    isActive: false,
    isDisabled: false,
    style: {},
    onClick: null,
};

class Button extends Component {
    handleClick = (e) => {
        const propsOnClick = this.props.onClick;
        if (!propsOnClick) { return; }

        if (this.props.isDisabled) {
            e.preventDefault();
            return;
        }

        propsOnClick(e);
    }

    handleRef = (node) => {
        this.innerRef = node;
    }

    render() {
        const {
            className,
            isFluid,
            isClear,
            isDisabled,
            isActive,
            children,
            style,
        } = this.props;

        return (
            <button
                type="button"
                style={style}
                className={cx(
                    'uir-button',
                    className,
                    {
                        'uir-button--fluid': isFluid,
                        'uir-button--clear': isClear,
                        'uir-button--active': isActive,
                        'uir-button--disabled': isDisabled,
                    },
                )}
                ref={this.handleRef}
                disabled={isDisabled}
                onClick={this.handleClick}
            >
                <span className="uir-button--content">
                    {children}
                </span>
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
