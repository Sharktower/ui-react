import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import Tooltip from '../Tooltip/Tooltip';
import TooltipBox from '../Tooltip/TooltipBox';
import { TooltipBoxStatus, TooltipPosition } from '../Tooltip/TooltipEnums';
import IconClear from '../Icon/IconClear';
import Button from '../Button/Button';
import { ButtonVariant } from '../Button/ButtonEnums';
import { TextFieldVariant } from './TextFieldEnums';
import requiredIconAndTooltip from './RequiredIconAndTooltip';
import './TextField.scss';

const propTypes = {
    autoHideLabel: PropTypes.bool,
    className: PropTypes.string,
    componentRef: PropTypes.func,
    icon: PropTypes.element,
    isClearable: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnterKey: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    step: PropTypes.number,
    style: StyleObjectPropType(),
    tooltipError: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    tooltipHint: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    tooltipPosition: ListPropType([
        TooltipPosition.TOP_CENTER,
        TooltipPosition.TOP_LEFT,
        TooltipPosition.TOP_RIGHT,
        TooltipPosition.BOTTOM_CENTER,
        TooltipPosition.BOTTOM_RIGHT,
        TooltipPosition.BOTTOM_LEFT,
    ]),
    tooltipRequired: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    variant: ListPropType([
        TextFieldVariant.DEFAULT,
        TextFieldVariant.TITLE,
    ]),
};

const defaultProps = {
    autoHideLabel: false,
    className: null,
    componentRef: null,
    icon: null,
    isClearable: false,
    isDisabled: false,
    isFullWidth: false,
    isReadOnly: false,
    isRequired: false,
    isValid: null,
    label: null,
    max: null,
    min: null,
    name: null,
    onBlur: null,
    onChange: null,
    onEnterKey: null,
    onFocus: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    placeholder: null,
    step: null,
    style: null,
    tooltipError: null,
    tooltipHint: null,
    tooltipRequired: 'required',
    tooltipPosition: TooltipPosition.BOTTOM_CENTER,
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
        this.uid = `text-field-${lastInstanceId}`;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ value: nextProps.value });
        }
    }

    clearInput = () => {
        if (this.inputRef) {
            this.inputRef.value = '';
            this.handleInputChange();
        }
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
        const onBlur = this.props.onBlur || (() => {});
        this.setState({
            hasFocus: false,
            showTooltip: false,
        });
        onBlur(event);
    }

    handleInputChange = (event) => {
        if (this.inputRef) {
            const { value } = this.inputRef;
            const onChange = this.props.onChange || (() => {});
            if (typeof value !== 'undefined') {
                this.setState({ value });
            }
            onChange(value, event);
        }
    }

    handleInputFocus = (event) => {
        const onFocus = this.props.onFocus || (() => {});
        this.setState({
            hasFocus: true,
            showTooltip: true,
        });
        onFocus(event);
    }

    handleInputKeyDown = (event) => {
        const { onKeyDown, onEnterKey } = this.props;
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

    handleIconClick = () => {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    handleClearIconClick = (event) => {
        this.clearInput();
        this.handleIconClick();
        this.handleInputChange(event);
    }

    /**
     * wrapInputWithTooltip
     * provide a string or component to tooltipError or tooltipHint and this
     * wrapper will be used to create a tooltipBox (an error box is used for tooltipError)
     * @param {Element} input - the input field
     * @param {Component|string} tooltip - the error or hint tooltip
     */
    wrapInputWithTooltip = (input, tooltip) => {
        const { DEFAULT, ERROR } = TooltipBoxStatus;
        return (
            tooltip ?
                <Tooltip
                    position={this.props.tooltipPosition}
                    showTooltip={this.state.showTooltip}
                    tooltip={
                        <TooltipBox
                            status={this.props.tooltipError && this.props.isValid === false ?
                                ERROR :
                                DEFAULT}
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
        const showLabel = (
            this.props.autoHideLabel === false ||
            this.state.hasFocus ||
            this.state.hasMouseOver ||
            !this.state.value
        );
        /* eslint-disable jsx-a11y/label-has-for */
        // @NB: jsx-a11y/label-has-for fails with UID as id
        const label = this.props.label && showLabel ?
            (
                <label
                    htmlFor={this.uid}
                    className={cx(
                        'uir-text-field-label',
                        {
                            'uir-text-field-label--visually-hidden': this.props.variant === TextFieldVariant.TITLE,
                        },
                    )}
                >
                    {this.props.label}
                    {requiredIconAndTooltip(this.props.isRequired, this.props.tooltipRequired)}
                </label>
            ) :
            null;
        /* eslint-enable */
        const showPlaceholder = (
            !this.props.label ||
            this.state.hasFocus ||
            this.props.variant === TextFieldVariant.TITLE
        );
        const icon = this.props.icon ?
            (
                <span className="uir-text-field-left-icon">
                    <Button
                        className="uir-text-field-icon-wrapper"
                        icon={this.props.icon}
                        onClick={this.handleIconClick}
                        tabIndex={-1}
                        variant={ButtonVariant.CLEAR}
                    />
                </span>
            ) :
            null;
        const clearIcon = this.props.isClearable && this.state.value ?
            (
                <span className="uir-text-field-right-icon">
                    <Button
                        className="uir-text-field-icon-wrapper"
                        icon={<IconClear />}
                        onClick={this.handleClearIconClick}
                        variant={ButtonVariant.CLEAR}
                    />
                </span>
            ) :
            null;
        const tooltipError = this.props.isValid === false ? this.props.tooltipError : null;
        return (
            <div
                className={cx(
                    'uir-text-field',
                    {
                        'uir-text-field--clearable': this.props.isClearable,
                        'uir-text-field--disabled': this.props.isDisabled,
                        'uir-text-field--focus': this.state.hasFocus,
                        'uir-text-field--full-width': this.props.isFullWidth,
                        'uir-text-field--has-left-icon': this.props.icon,
                        'uir-text-field--has-right-icon': this.props.isRequired || this.props.isClearable,
                        'uir-text-field--has-value': `${this.state.value}`,
                        'uir-text-field--invalid': this.props.isValid === false,
                        'uir-text-field--readonly': this.props.isReadOnly,
                        'uir-text-field--title': this.props.variant === TextFieldVariant.TITLE,
                        'uir-text-field--valid': this.props.isValid,
                    },
                    this.props.className,
                )}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={this.props.style}
            >
                {icon}
                <div className="uir-text-field-inner">
                    <div className="uir-text-field-label-wrapper">
                        {label}
                    </div>
                    {this.wrapInputWithTooltip(
                        <input
                            aria-invalid={this.props.isValid === false}
                            className="uir-text-field-input"
                            disabled={this.props.isDisabled}
                            id={this.uid}
                            max={this.props.max}
                            min={this.props.min}
                            name={this.props.name}
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
                            step={this.props.step}
                            type={this.props.type}
                            value={this.state.value}
                        />,
                        tooltipError || this.props.tooltipHint,
                    )}
                    {requiredIconAndTooltip(
                        this.props.isRequired && !this.props.label,
                        this.props.tooltipRequired,
                    )}
                </div>
                {clearIcon}
            </div>
        );
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
