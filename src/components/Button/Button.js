import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonType from './ButtonType';
import './Button.scss';

const propTypes = {
    /** Content of the button, e.g. a string label or more complex React components */
    children: PropTypes.node.isRequired,
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
    /** for styling purposes */
    isActive: PropTypes.bool,
    /** set disabled HTML attribute, custom styling and will prevent onClick from firing */
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func,
    /** object with camelCased CSS rules, e.g.  style={{ marginTop: -1}} */
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
    type: PropTypes.oneOf([
        ButtonType.CLEAR,
        ButtonType.DEFAULT,
        ButtonType.PRIMARY,
    ]),
};

const defaultProps = {
    className: null,
    isActive: false,
    isDisabled: false,
    isFullWidth: false,
    onClick: null,
    style: null,
    type: ButtonType.DEFAULT,
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

    render() {
        const {
            children,
            className,
            isActive,
            isDisabled,
            isFullWidth,
            style,
            type,
        } = this.props;

        return (
            <button
                type="button"
                style={style}
                className={cx(
                    'uir-button',
                    className,
                    {
                        'uir-button--active': isActive,
                        'uir-button--clear': type === ButtonType.CLEAR,
                        'uir-button--disabled': isDisabled,
                        'uir-button--full-width': isFullWidth,
                        'uir-button--primary': type === ButtonType.PRIMARY,
                    },
                )}
                disabled={isDisabled}
                onClick={this.handleClick}
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
