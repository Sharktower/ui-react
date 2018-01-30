import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import Tooltip from '../Tooltip/Tooltip';
import TooltipBox from '../Tooltip/TooltipBox';
import { TooltipBoxStatus, TooltipPosition } from '../Tooltip/TooltipEnums';
import IconClear from '../Icon/IconClear';
import IconRequired from '../Icon/IconRequired';
import Button from '../Button/Button';
import { ButtonVariant } from '../Button/ButtonEnums';
import { TextFieldVariant } from './TextFieldEnums';
import './TextField.scss';

const propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    hasLabelAlways: PropTypes.bool,
    icon: PropTypes.element,
    id: PropTypes.string,
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnterKey: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    style: StyleObjectPropType(),
    tooltipError: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    tooltipHint: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    tooltipRequired: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    type: PropTypes.string,
    value: PropTypes.string,
    variant: ListPropType([
        TextFieldVariant.DEFAULT,
        TextFieldVariant.TITLE,
    ]),
};

const defaultProps = {
    className: null,
    componentRef: null,
    hasLabelAlways: false,
    icon: null,
    id: null,
    isClearable: false,
    isDisabled: false,
    isFullWidth: false,
    isReadOnly: false,
    isRequired: false,
    isValid: null,
    label: null,
    onBlur: null,
    onChange: null,
    onEnterKey: null,
    onFocus: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    placeholder: null,
    style: null,
    tooltipError: null,
    tooltipHint: null,
    tooltipRequired: 'required',
    type: 'text',
    value: '',
    variant: TextFieldVariant.DEFAULT,
};

let lastInstanceId = 0;

class TextField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasFocus: false,
            hasMouseOver: false,
            showTooltip: false,
            value: props.value,
        };

        lastInstanceId += 1;
        this.uid = `textfield-${lastInstanceId}`;
    }

    handleMouseEnter = () => {
        this.setState({ hasMouseOver: true });
    }

    handleMouseLeave = () => {
        this.setState({ hasMouseOver: false });
    }

    handleInputRef = (ref) => {
        const { componentRef } = this.props;
        this.inputRef = ref;
        if (componentRef) {
            componentRef(ref);
        }
    }

    handleInputBlur = (event) => {
        const { onBlur } = this.props;
        this.setState({
            hasFocus: false,
            showTooltip: false,
        });
        if (onBlur) {
            onBlur(event);
        }
    }

    handleInputChange = (event) => {
        const { value } = this.inputRef;
        const { onChange } = this.props;
        if (typeof value !== 'undefined') {
            this.setState({ value });
        }
        if (onChange) {
            onChange(value, event);
        }
    }

    handleInputFocus = (event) => {
        const { onFocus } = this.props;
        this.setState({
            hasFocus: true,
            showTooltip: true,
        });
        if (onFocus) {
            onFocus(event);
        }
    }

    handleInputKeyDown = (event) => {
        const { onKeyDown } = this.props;
        const { onEnterKey } = this.props;
        if (onKeyDown) {
            onKeyDown(event.key, event);
        }
        if (onEnterKey && event.key === 'Enter') {
            onEnterKey(event);
        }
    }

    handleInputKeyPress = (event) => {
        const { onKeyPress } = this.props;
        if (onKeyPress) {
            onKeyPress(event.key, event);
        }
    }

    handleInputKeyUp = (event) => {
        const { onKeyUp } = this.props;
        if (onKeyUp) {
            onKeyUp(event.key, event);
        }
    }

    handleClearIconClick = () => {
        this.setState({ value: '' });
    }

    wrapInputWithTooltip = (input, tooltip) => {
        // @NB: if you provide a string to either tooltipError or tooltipHint a wrapper
        //      will be created for you (an error tooltip box is used for tooltipError)
        const { DEFAULT, ERROR } = TooltipBoxStatus;
        return (
            tooltip ?
                <Tooltip
                    position={TooltipPosition.BOTTOM_CENTER}
                    showTooltip={this.state.showTooltip}
                    tooltip={
                        <TooltipBox
                            status={this.props.tooltipError ? ERROR : DEFAULT}
                        >
                            {tooltip}
                        </TooltipBox>
                    }
                >
                    {input}
                </Tooltip> :
                input
        );
    }

    render() {
        /* eslint-disable jsx-a11y/label-has-for */
        // @NB: jsx-a11y/label-has-for fails with UID as id
        const showLabel = (
            this.props.hasLabelAlways ||
            this.state.hasFocus ||
            this.state.hasMouseOver ||
            !this.state.value
        );
        const requiredIcon = this.props.isRequired ?
            <Tooltip tooltip={this.props.tooltipRequired}><IconRequired /></Tooltip> :
            null;
        const label = this.props.label && showLabel ?
            (
                <label
                    htmlFor={this.uid}
                    className={cx(
                        'uir-textfield-label',
                        {
                            'uir-textfield-label--visually-hidden': this.props.variant === TextFieldVariant.TITLE,
                        },
                    )}
                >
                    {this.props.label}
                    {requiredIcon}
                </label>
            ) :
            null;
        const showPlaceholder = (
            !this.props.label ||
            this.state.hasFocus ||
            this.props.variant === TextFieldVariant.TITLE
        );
        const icon = this.props.icon ?
            this.props.icon :
            null;
        const clearIcon = this.props.isClearable && this.state.value ?
            (
                <Button
                    onClick={this.handleClearIconClick}
                    variant={ButtonVariant.CLEAR}
                >
                    <IconClear />
                </Button>
            ) :
            null;
        return (
            <div
                className={cx(
                    'uir-textfield',
                    {
                        'uir-textfield--disabled': this.props.isDisabled,
                        'uir-textfield--focus': this.state.hasFocus,
                        'uir-textfield--full-width': this.props.isFullWidth,
                        'uir-textfield--has-left-icon': this.props.icon,
                        'uir-textfield--has-right-icon': this.props.isRequired || this.props.isClearable,
                        'uir-textfield--has-value': this.state.value,
                        'uir-textfield--invalid': this.props.isValid === false,
                        'uir-textfield--readonly': this.props.isReadOnly,
                        'uir-textfield--title': this.props.variant === TextFieldVariant.TITLE,
                        'uir-textfield--valid': this.props.isValid,
                    },
                    this.props.className,
                )}
                id={this.props.id}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={this.props.style}
            >
                <span className="uir-textfield-left-icon">
                    {icon}
                </span>
                <div className="uir-textfield-inner">
                    <div className="uir-textfield-label-wrapper">
                        {label}
                    </div>
                    {this.wrapInputWithTooltip(
                        <input
                            aria-invalid={this.props.isValid === false}
                            aria-required={this.props.isRequired}
                            className="uir-textfield-input"
                            disabled={this.props.isDisabled}
                            id={this.uid}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}
                            onFocus={this.handleInputFocus}
                            onKeyDown={this.handleInputKeyDown}
                            onKeyUp={this.handleInputKeyUp}
                            onKeyPress={this.handleInputKeyPress}
                            placeholder={showPlaceholder ? this.props.placeholder : null}
                            readOnly={this.props.isReadOnly}
                            required={this.props.isRequired}
                            ref={this.handleInputRef}
                            type={this.props.type}
                            value={this.state.value}
                        />,
                        this.props.tooltipError || this.props.tooltipHint,
                    )}
                </div>
                <span className="uir-textfield-right-icon">
                    {clearIcon}
                </span>
            </div>
        );
        /* eslint-enable */
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
