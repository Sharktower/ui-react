import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

const propTypes = {
    /** Extra classes for the top-level wrapper */
    className: PropTypes.string,
    /** width 100% */
    isFluid: PropTypes.bool,
    /** transparent button */
    isClear: PropTypes.bool,
    /** for styling purposes */
    isActive: PropTypes.bool,
    /** set disabled HTML attribute, custom styling and will prevent onClick from firing */
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    /** Content of the button, e.g. a string label or more complex React components */
    children: PropTypes.node.isRequired,
    /** object with camelCased CSS rules, e.g.  style={{ marginTop: '-1px'}} */
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    className: '',
    isFluid: false,
    isClear: false,
    isActive: false,
    isDisabled: false,
    style: {},
    onClick: () => {},
};

class Button extends Component {
    handleClick = (e) => {
        if (this.props.isDisabled) {
            e.preventDefault();
            return;
        }
        this.props.onClick(e);
    }

    handleRef = (node) => {
        this.innerRef = node;
    }

    render() {
        const {
            className,
            isFluid,
            isClear,
            isDisabled,
            isActive,
            children,
            style,
        } = this.props;

        return (
            <button
                type="button"
                style={style}
                className={cx(
                    'uir-Button',
                    className,
                    {
                        'uir-Button-fluid': isFluid,
                        'uir-Button-clear': isClear,
                        'uir-Button-active': isActive,
                        'uir-Button-disabled': isDisabled,
                    },
                )}
                ref={this.handleRef}
                disabled={isDisabled}
                onClick={this.handleClick}
            >
                <div className="uir-Button-content">
                    {children}
                </div>
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
