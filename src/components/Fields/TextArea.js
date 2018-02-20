import React, { Component } from 'react';
import autosize from 'autosize';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import Tooltip from '../Tooltip/Tooltip';
import TooltipBox from '../Tooltip/TooltipBox';
import { TooltipBoxStatus, TooltipPosition } from '../Tooltip/TooltipEnums';
import requiredIconAndTooltip from './RequiredIconAndTooltip';
import './TextArea.scss';

const propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    hasAutoHeight: PropTypes.bool,
    hasLabelAlways: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
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
    hasAutoHeight: false,
    hasLabelAlways: false,
    isDisabled: false,
    isFullWidth: false,
    isReadOnly: false,
    isRequired: false,
    isValid: null,
    label: null,
    name: null,
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
        this.uid = `text-area-${lastInstanceId}`;
    }

    componentDidMount = () => {
        if (this.props.hasAutoHeight) {
            autosize(this.inputRef);
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
        }, () => {
            onBlur(event);
        });
    }

    handleInputChange = (event) => {
        const { value } = this.inputRef;
        const onChange = this.props.onChange || (() => {});
        if (typeof value !== 'undefined') {
            this.setState({ value }, () => {
                onChange(value, event);
            });
        } else {
            onChange(value, event);
        }
    }

    handleInputFocus = (event) => {
        const onFocus = this.props.onFocus || (() => {});
        this.setState({
            hasFocus: true,
            showTooltip: true,
        }, () => {
            onFocus(event);
        });
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

    /**
     * wrapInputWithTooltip
     * provide a string or component to tooltipError or tooltipHint and this
     * wrapper will be used to create a tooltipBox (an error box is used for tooltipError)
     * @param {Element} textarea - the textarea field
     * @param {Component|string} tooltip - the error or hint tooltip
     */
    wrapInputWithTooltip = (textarea, tooltip) => {
        const { DEFAULT, ERROR } = TooltipBoxStatus;
        return (
            tooltip ?
                <Tooltip
                    position={TooltipPosition.BOTTOM_CENTER}
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
                    {textarea}
                </Tooltip> :
                textarea
        );
    }

    render() {
        const showLabel = (
            this.props.hasLabelAlways ||
            this.state.hasFocus ||
            this.state.hasMouseOver ||
            !this.state.value
        );
        /* eslint-disable jsx-a11y/label-has-for */
        // @NB: jsx-a11y/label-has-for fails with UID as id
        const label = this.props.label && showLabel ?
            (
                <label htmlFor={this.uid} className="uir-text-area-label">
                    {this.props.label}
                    {requiredIconAndTooltip(this.props.isRequired, this.props.tooltipRequired)}
                </label>
            ) :
            null;
        /* eslint-enable */
        const showPlaceholder = (!this.props.label || this.state.hasFocus);
        const tooltipError = this.props.isValid === false ? this.props.tooltipError : null;
        return (
            <div
                className={cx(
                    'uir-text-area',
                    {
                        'uir-text-area--disabled': this.props.isDisabled,
                        'uir-text-area--focus': this.state.hasFocus,
                        'uir-text-area--full-width': this.props.isFullWidth,
                        'uir-text-area--has-auto-height': this.props.hasAutoHeight,
                        'uir-text-area--has-right-icon': this.props.isRequired,
                        'uir-text-area--has-value': this.state.value,
                        'uir-text-area--invalid': this.props.isValid === false,
                        'uir-text-area--readonly': this.props.isReadOnly,
                        'uir-text-area--valid': this.props.isValid,
                    },
                    this.props.className,
                )}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={this.props.style}
            >
                <div className="uir-text-area-inner">
                    <div className="uir-text-area-label-wrapper">
                        {label}
                    </div>
                    {this.wrapInputWithTooltip(
                        <textarea
                            aria-invalid={this.props.isValid === false}
                            className="uir-text-area-input"
                            disabled={this.props.isDisabled}
                            id={this.uid}
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
                            rows={this.props.rows}
                            value={this.state.value}
                        />,
                        tooltipError || this.props.tooltipHint,
                    )}
                    {requiredIconAndTooltip(
                        this.props.isRequired && !this.props.label,
                        this.props.tooltipRequired,
                    )}
                </div>
            </div>
        );
    }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
