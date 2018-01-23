import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import TooltipBox from './TooltipBox';
import { TooltipPosition } from './TooltipEnums';
import './Tooltip.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    position: ListPropType([
        TooltipPosition.TOP_CENTER,
        TooltipPosition.TOP_LEFT,
        TooltipPosition.TOP_RIGHT,
        TooltipPosition.BOTTOM_CENTER,
        TooltipPosition.BOTTOM_RIGHT,
        TooltipPosition.BOTTOM_LEFT,
    ]),
    showTooltip: PropTypes.bool,
    style: StyleObjectPropType(),
    tabIndex: PropTypes.number,
    tooltip: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
};

const defaultProps = {
    className: null,
    position: TooltipPosition.TOP_CENTER,
    showTooltip: null,
    style: null,
    tabIndex: -1,
};

class Tooltip extends Component {
    state = {
        showTooltip: false,
    }

    getTooltipContents = () => {
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
