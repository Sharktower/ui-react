import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonType, ButtonIconPosition } from './ButtonEnums';
import './Button.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    confirmText: PropTypes.string,
    confirmedText: PropTypes.string,
    hasConfirm: PropTypes.bool,
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf([
        ButtonIconPosition.LEFT,
        ButtonIconPosition.RIGHT,
    ]),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
    tabIndex: PropTypes.number,
    type: PropTypes.oneOf([
        ButtonType.CLEAR,
        ButtonType.DEFAULT,
        ButtonType.PRIMARY,
        ButtonType.ROUND,
    ]),
};

const defaultProps = {
    children: null,
    className: null,
    confirmText: 'Confirm?',
    confirmedText: 'Cool!',
    hasConfirm: false,
    icon: null,
    iconPosition: ButtonIconPosition.LEFT,
    isActive: false,
    isDisabled: false,
    isFullWidth: false,
    style: null,
    tabIndex: null,
    type: ButtonType.DEFAULT,
};

class Button extends Component {
    state = {
        confirmed: false,
        confirming: false,
    };

    componentWillUnmount() {
        clearTimeout(this.confirmedTimeout);
    }

    handleClick = (event) => {
        const propsOnClick = this.props.onClick;

        if (this.props.isDisabled) {
            event.preventDefault();
            return;
        }

        if (this.props.hasConfirm) {
            this.setState({
                confirmed: false,
                confirming: true,
            }, () => {
                this.confirmRef.focus();
            });
        } else {
            propsOnClick(event);
        }
    }

    handleRef = (ref) => {
        this.componentRef = ref;
    }

    handleConfirmBlur = () => {
        if (this.state.confirming) {
            this.setState({
                confirming: false,
            });
        }
    }

    handleConfirmClick = (event) => {
        event.stopPropagation();
        this.setState({
            confirmed: true,
            confirming: false,
        }, () => {
            // Wait 1s for animation to finish
            this.confirmedTimeout = setTimeout(() => {
                this.setState({
                    confirmed: false,
                });
            }, 1000);
            this.componentRef.focus();
            this.props.onClick(event);
        });
    }

    handleConfirmKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleConfirmClick(event);
        }
    }

    handleConfirmRef = (ref) => {
        this.confirmRef = ref;
    }

    render() {
        const {
            children,
            className,
            confirmText,
            confirmedText,
            hasConfirm,
            icon,
            iconPosition,
            isActive,
            isDisabled,
            isFullWidth,
            style,
            tabIndex,
            type,
        } = this.props;

        return (
            <button
                type="button"
                style={style}
                className={cx(
                    'uir-button',
                    className,
                    icon ? `uir-button--icon-${iconPosition}` : null,
                    {
                        'uir-button--active': isActive,
                        'uir-button--clear': type === ButtonType.CLEAR,
                        'uir-button--disabled': isDisabled,
                        'uir-button--full-width': isFullWidth,
                        'uir-button--primary': type === ButtonType.PRIMARY,
                        'uir-button--round': type === ButtonType.ROUND,
                    },
                )}
                disabled={isDisabled}
                onClick={this.handleClick}
                ref={this.handleRef}
                tabIndex={tabIndex}
            >
                {iconPosition === ButtonIconPosition.LEFT ? icon : null }
                <span className="uir-button-content">
                    {children}
                </span>
                {iconPosition === ButtonIconPosition.RIGHT ? icon : null }
                {hasConfirm ?
                    <span
                        aria-hidden={!this.state.confirming && !this.state.confirmed}
                        className={cx(
                            'uir-button',
                            'uir-button-confirmation',
                            {
                                'uir-button-confirmation--confirming': this.state.confirming,
                                'uir-button-confirmation--confirmed': this.state.confirmed,
                            },
                        )}
                        onBlur={this.handleConfirmBlur}
                        onClick={this.handleConfirmClick}
                        onKeyDown={this.handleConfirmKeyDown}
                        ref={this.handleConfirmRef}
                        role="button"
                        tabIndex="-1"
                    >
                        {this.state.confirmed ? confirmedText : null}
                        {this.state.confirming ? confirmText : null}
                    </span>
                    : null
                }
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
