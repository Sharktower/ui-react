import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    tooltip: PropTypes.element.isRequired,
    showTooltip: PropTypes.bool,
    tabIndex: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    showTooltip: null,
    tabIndex: 0,
    style: null,
};

class Tooltip extends Component {
    state = {
        showTooltip: false,
    }

    handleFocus = () => this.setState({ showTooltip: true })

    handleBlur = () => this.setState({ showTooltip: false })

    render() {
        const showTooltip = this.props.showTooltip !== null
            ? this.props.showTooltip
            : this.state.showTooltip;
        const tooltip = showTooltip
            ? <div className="uir-tooltip-contents">{this.props.tooltip}</div>
            : null;
        return (
            <div
                className="uir-tooltip"
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                role="tooltip"
                tabIndex={this.props.tabIndex}
                style={this.props.style}
            >
                {tooltip}
                {this.props.children}
            </div>
        );
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
