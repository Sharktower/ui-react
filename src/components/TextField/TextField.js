import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TextField.scss';

const propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnterKey: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

const defaultProps = {
    className: null,
    componentRef: null,
    label: null,
    onBlur: null,
    onChange: null,
    onEnterKey: null,
    onFocus: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    placeholder: null,
    type: 'text',
    value: '',
};

class TextField extends Component {
    state = {
        hasFocus: false,
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

    render() {
        /* eslint-disable jsx-a11y/label-has-for */
        // @NB: jsx-a11y/label-has-for fails with UID as id
        const label = this.props.label ?
            <label htmlFor={this.uid} className="uir-textfield-label">{this.props.label}</label> :
            null;
        return (
            <div
                className={cx(
                    'uir-textfield',
                    {
                        'uir-textfield--focus': this.state.hasFocus,
                    },
                    this.props.className,
                )}
            >
                {label}
                <input
                    className="uir-textfield-input"
                    id={this.uid}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                    onFocus={this.handleInputFocus}
                    onKeyDown={this.handleInputKeyDown}
                    onKeyUp={this.handleInputKeyUp}
                    onKeyPress={this.handleInputKeyPress}
                    placeholder={this.state.hasFocus ? this.props.placeholder : null}
                    ref={this.handleInputRef}
                    type={this.props.type}
                    value={this.state.value}
                />
            </div>
        );
        /* eslint-enable */
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
