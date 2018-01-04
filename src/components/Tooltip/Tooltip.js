import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import TooltipBox from './TooltipBox';
import './Tooltip.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    tooltip: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
    position: ListPropType([
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-right',
        'bottom-left',
    ]),
    showTooltip: PropTypes.bool,
    tabIndex: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    position: 'top-center',
    showTooltip: null,
    tabIndex: 0,
    className: null,
    style: null,
};

class Tooltip extends Component {
    state = {
        showTooltip: false,
    }

    getTooltipContents() {
        const { tooltip } = this.props;
        return typeof tooltip === 'string'
            ? <TooltipBox>{tooltip}</TooltipBox>
            : tooltip;
    }

    handleFocus = () => this.setState({ showTooltip: true })

    handleBlur = () => this.setState({ showTooltip: false })

    render() {
        const showTooltip = this.props.showTooltip !== null
            ? this.props.showTooltip
            : this.state.showTooltip;
        const tooltip = showTooltip
            ? <div className="uir-tooltip-contents">{this.getTooltipContents()}</div>
            : null;
        return (
            <div
                className={cx(
                    'uir-tooltip',
                    `uir-tooltip--${this.props.position}`,
                    this.props.className,
                )}
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                role="tooltip"
                tabIndex={this.props.tabIndex}
                style={this.props.style}
            >
                {tooltip}
                <div className="uir-tooltip-inner">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
