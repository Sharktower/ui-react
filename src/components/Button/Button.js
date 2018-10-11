import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ElementOrStringPropType from '../../prop-types/element-or-string';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import { ButtonIconPosition, ButtonType, ButtonVariant } from './ButtonEnums';
import './Button.scss';

const propTypes = {
    'aria-expanded': PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    confirmText: PropTypes.string,
    confirmedText: PropTypes.string,
    hasConfirm: PropTypes.bool,
    icon: ElementOrStringPropType,
    iconPosition: ListPropType([
        ButtonIconPosition.LEFT,
        ButtonIconPosition.RIGHT,
    ]),
    id: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    style: StyleObjectPropType,
    tabIndex: PropTypes.number,
    componentRef: PropTypes.func,
    type: ListPropType([
        ButtonType.BUTTON,
        ButtonType.RESET,
        ButtonType.SUBMIT,
    ]),
    variant: ListPropType([
        ButtonVariant.CLEAR,
        ButtonVariant.DEFAULT,
        ButtonVariant.PRIMARY,
        ButtonVariant.ROUND,
    ]),
};

const defaultProps = {
    'aria-expanded': null,
    children: null,
    className: null,
    confirmText: 'Confirm?',
    confirmedText: 'Cool!',
    hasConfirm: false,
    icon: null,
    iconPosition: ButtonIconPosition.LEFT,
    id: null,
    isActive: false,
    isDisabled: false,
    isFullWidth: false,
    style: null,
    tabIndex: null,
    type: ButtonType.BUTTON,
    variant: ButtonVariant.DEFAULT,
    componentRef: null,
};

class Button extends Component {
    state = {
        confirmed: false,
        confirming: false,
    };

    componentWillUnmount() {
        clearTimeout(this.confirmedTimeout);
    }

    getConfirmationPane() {
        return (
            <span
                aria-hidden={!this.state.confirming && !this.state.confirmed}
            >
                {this.getConfirmationTextPlaceholder()}
                <span
                    className={cx(
                        'uir-button-confirmation',
                        {
                            'uir-button-confirmation--confirming': this.state.confirming,
                            'uir-button-confirmation--confirmed': this.state.confirmed,
                        },
                    )}
                >
                    {this.state.confirmed ? this.props.confirmedText : null}
                    {this.state.confirming ? this.props.confirmText : null}
                </span>
            </span>
        );
    }

    // Outputs confirm and confirmed strings in order to reserve appropriate horizontal space.
    // This is for width calculation only, the text is hidden from all users.
    getConfirmationTextPlaceholder() {
        return (
            <span className="uir-button-confirmation-placeholder" aria-hidden="true">
                {`${this.props.confirmText} \n ${this.props.confirmedText}`}
            </span>
        );
    }

    handleBlur = () => {
        if (this.state.confirming) {
            this.setState({
                confirming: false,
            });
        }
    }

    handleClick = (event) => {
        const propsOnClick = this.props.onClick;

        if (this.props.isDisabled) {
            event.preventDefault();
            return;
        }

        if (this.props.hasConfirm) {
            if (!this.state.confirming) {
                this.setState({
                    confirmed: false,
                    confirming: true,
                });
            } else {
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
                });
                propsOnClick(event);
            }
        } else {
            propsOnClick(event);
        }
    }

    handleRef = (ref) => {
        const { componentRef } = this.props;
        this.buttonRef = ref;
        if (componentRef) {
            componentRef(ref);
        }
    }

    render() {
        return (
            <button
                id={this.props.id}
                type={this.props.type}
                style={this.props.style}
                className={cx(
                    'uir-button',
                    this.props.className,
                    this.props.icon ? `uir-button--icon-${this.props.iconPosition}` : null,
                    {
                        'uir-button--active': this.props.isActive,
                        'uir-button--clear': this.props.variant === ButtonVariant.CLEAR,
                        'uir-button--disabled': this.props.isDisabled,
                        'uir-button--full-width': this.props.isFullWidth,
                        'uir-button--primary': this.props.variant === ButtonVariant.PRIMARY,
                        'uir-button--round': this.props.variant === ButtonVariant.ROUND,
                    },
                )}
                aria-expanded={this.props['aria-expanded']}
                disabled={this.props.isDisabled}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                ref={this.handleRef}
                tabIndex={this.props.tabIndex}
                {...proxyDataProps(this.props)}
            >
                {this.props.iconPosition === ButtonIconPosition.LEFT ? this.props.icon : null}
                <span className="uir-button-content">
                    {this.props.children}
                </span>
                {this.props.iconPosition === ButtonIconPosition.RIGHT ? this.props.icon : null}
                {this.props.hasConfirm ? this.getConfirmationPane() : null}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
