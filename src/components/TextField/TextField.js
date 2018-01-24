import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Tooltip from '../Tooltip/Tooltip';
import TooltipBox from '../Tooltip/TooltipBox';
import { TooltipBoxStatus } from '../Tooltip/TooltipEnums';
import IconClear from '../Icon/IconClear';
import './TextField.scss';

const propTypes = {
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    componentRef: PropTypes.func,
    icon: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]),
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
    tooltipHint: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    tooltipError: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    type: PropTypes.string,
    value: PropTypes.string,
};

const defaultProps = {
    autoComplete: 'on',
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
    onBlur: null,
    onChange: null,
    onEnterKey: null,
    onFocus: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    placeholder: null,
    tooltipHint: null,
    tooltipError: null,
    type: 'text',
    value: '',
};

class TextField extends Component {
    state = {
        hasFocus: false,
        showTooltip: false,
        value: this.props.value,
    }

    uid = 'textfield'

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
        // @NB: if you provide a tooltipError or tooltipHint string a tooltip wrapper
        //      will be created for you, the error tooltipBox is used for tooltipError
        const { DEFAULT, ERROR } = TooltipBoxStatus;
        return (
            tooltip ?
                <Tooltip
                    tooltip={
                        <TooltipBox
                            status={this.props.tooltipError ? ERROR : DEFAULT}
                        >
                            {tooltip}
                        </TooltipBox>
                    }
                    showTooltip={this.state.showTooltip}
                >
                    {input}
                </Tooltip> :
                input
        );
    }

    render() {
        /* eslint-disable jsx-a11y/label-has-for */
        // @NB: jsx-a11y/label-has-for fails with UID as id
        const label = this.props.label ?
            <label htmlFor={this.uid} className="uir-textfield-label">{this.props.label}</label> :
            null;
        const icon = this.props.icon ?
            <span aria-hidden="true">{this.props.icon}</span> :
            null;
        const clearIcon = this.props.isClearable ?
            <IconClear onClick={this.handleClearIconClick} /> :
            null;
        return (
            <div
                className={cx(
                    'uir-textfield',
                    {
                        'uir-textfield--focus': this.state.hasFocus,
                        'uir-textfield--full-width': this.props.isFullWidth,
                        'uir-textfield--invalid': this.props.isValid === false,
                        'uir-textfield--valid': this.props.isValid,
                    },
                    this.props.className,
                )}
            >
                {icon}
                <div className="uir-textfield-inner">
                    {label}
                    {this.wrapInputWithTooltip(
                        <input
                            autoComplete={this.props.autoComplete}
                            className="uir-textfield-input"
                            disabled={this.props.isDisabled}
                            id={this.uid}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}
                            onFocus={this.handleInputFocus}
                            onKeyDown={this.handleInputKeyDown}
                            onKeyUp={this.handleInputKeyUp}
                            onKeyPress={this.handleInputKeyPress}
                            placeholder={this.state.hasFocus ? this.props.placeholder : null}
                            readOnly={this.props.isReadOnly}
                            required={this.props.isRequired}
                            ref={this.handleInputRef}
                            type={this.props.type}
                            value={this.state.value}
                        />,
                        this.props.tooltipError || this.props.tooltipHint,
                    )}
                </div>
                {clearIcon}
            </div>
        );
        /* eslint-enable */
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
