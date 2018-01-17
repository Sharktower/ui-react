import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonType, ButtonIconPosition } from './ButtonEnums';
import './Button.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
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
    type: PropTypes.oneOf([
        ButtonType.CLEAR,
        ButtonType.DEFAULT,
        ButtonType.PRIMARY,
    ]),
};

const defaultProps = {
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
    type: ButtonType.DEFAULT,
};

class Button extends Component {
    state = {
        confirmed: false,
        confirming: false,
    };

    handleBlur = () => {
        if (this.state.confirming) {
            this.setState({
                confirming: false,
            });
        }
    }

    handleClick = (e) => {
        const propsOnClick = this.props.onClick;

        if (this.props.isDisabled) {
            e.preventDefault();
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
                    propsOnClick(e);
                });
            }
        } else {
            propsOnClick(e);
        }
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
                    },
                )}
                disabled={isDisabled}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
            >
                {iconPosition === ButtonIconPosition.LEFT ? icon : null }
                <span className="uir-button-content">
                    {children}
                </span>
                {iconPosition === ButtonIconPosition.RIGHT ? icon : null }
                {hasConfirm ?
                    <span
                        className={cx(
                            'uir-button',
                            'uir-button-confirmation',
                            {
                                'uir-button-confirmation--confirming': this.state.confirming,
                                'uir-button-confirmation--confirmed': this.state.confirmed,
                            },
                        )}
                    >
                        {/* {this.state.confirmed ? confirmedText : confirmText} */}
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
