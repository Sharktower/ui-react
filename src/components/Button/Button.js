import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonType from './ButtonType';
import './Button.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func,
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
    icon: null,
    iconPosition: 'left',
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
            icon,
            iconPosition,
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
                    icon ? `uir-button-icon--${iconPosition}` : null,
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
                {iconPosition === 'left' ? icon : null }
                <span className="uir-button-content">
                    {children}
                </span>
                {iconPosition === 'right' ? icon : null }
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
