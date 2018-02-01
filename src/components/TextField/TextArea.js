import React, { Component } from 'react';
import autosize from 'autosize';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import Tooltip from '../Tooltip/Tooltip';
import TooltipBox from '../Tooltip/TooltipBox';
import { TooltipBoxStatus, TooltipPosition } from '../Tooltip/TooltipEnums';
import IconRequired from '../Icon/IconRequired';
import { TextAreaAutoHeight } from './TextFieldEnums';
import './TextArea.scss';

const propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    hasAutoHeight: ListPropType([
        TextAreaAutoHeight.ENABLED,
        TextAreaAutoHeight.DISABLED,
    ]),
    hasLabelAlways: PropTypes.bool,
    id: PropTypes.string,
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
    rows: PropTypes.number,
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
    value: PropTypes.string,
};

const defaultProps = {
    className: null,
    componentRef: null,
    hasAutoHeight: TextAreaAutoHeight.DISABLED,
    hasLabelAlways: false,
    id: null,
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
    rows: 1,
    style: null,
    tooltipError: null,
    tooltipHint: null,
    tooltipRequired: 'required',
    value: '',
};

let lastInstanceId = 0;

class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasFocus: false,
            hasMouseOver: false,
            showTooltip: false,
            value: props.value,
        };

        lastInstanceId += 1;
        this.uid = `textarea-${lastInstanceId}`;
    }

    componentDidMount = () => {
        autosize(this.inputRef);
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
                <label htmlFor={this.uid} className="uir-textarea-label">
                    {this.props.label}
                    {requiredIcon}
                </label>
            ) :
            null;
        const showPlaceholder = (!this.props.label || this.state.hasFocus);
        return (
            <div
                className={cx(
                    'uir-textarea',
                    {
                        'uir-textarea--disabled': this.props.isDisabled,
                        'uir-textarea--focus': this.state.hasFocus,
                        'uir-textarea--full-width': this.props.isFullWidth,
                        'uir-textarea--has-auto-height': this.props.hasAutoHeight,
                        'uir-textarea--has-right-icon': this.props.isRequired,
                        'uir-textarea--has-value': this.state.value,
                        'uir-textarea--invalid': this.props.isValid === false,
                        'uir-textarea--readonly': this.props.isReadOnly,
                        'uir-textarea--valid': this.props.isValid,
                    },
                    this.props.className,
                )}
                id={this.props.id}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={this.props.style}
            >
                <div className="uir-textarea-inner">
                    <div className="uir-textarea-label-wrapper">
                        {label}
                    </div>
                    {this.wrapInputWithTooltip(
                        <textarea
                            aria-invalid={this.props.isValid === false}
                            aria-required={this.props.isRequired}
                            className="uir-textarea-input"
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
                            rows={this.props.rows}
                            value={this.state.value}
                        />,
                        this.props.tooltipError || this.props.tooltipHint,
                    )}
                </div>
            </div>
        );
        /* eslint-enable */
    }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
