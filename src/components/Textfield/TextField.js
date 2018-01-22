import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TextField.scss';

const propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

const defaultProps = {
    className: null,
    componentRef: null,
    label: null,
    placeholder: null,
    value: '',
};

class TextField extends Component {
    state = {
        hasFocus: false,
        value: this.props.value,
    }

    uid = 'textfield'

    handleInputRef = (ref) => {
        if (this.props.componentRef) {
            this.props.componentRef(ref);
        }
        this.inputRef = ref;
    }

    handleInputChange = () => {
        this.setState({
            value: this.inputRef.value,
        });
    }

    handleInputFocus = () => {
        this.setState({
            hasFocus: true,
        });
    }

    handleInputBlur = () => {
        this.setState({
            hasFocus: false,
        });
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
                    id={this.uid}
                    ref={this.handleInputRef}
                    className="uir-textfield-input"
                    placeholder={this.state.hasFocus ? this.props.placeholder : null}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                />
            </div>
        );
        /* eslint-enable */
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
