/* global window */
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ElementOrStringPropType from '../../prop-types/element-or-string';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
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
        TooltipPosition.AUTO,
    ]),
    showTooltip: PropTypes.bool,
    style: StyleObjectPropType,
    tabIndex: PropTypes.number,
    tooltip: ElementOrStringPropType.isRequired,
};

const defaultProps = {
    className: null,
    position: TooltipPosition.TOP_CENTER,
    showTooltip: null,
    style: null,
    tabIndex: -1,
};


const aboveCentre = pos => pos.y < pos.screenHeight / 2;
const leftOfCentre = pos => pos.x < pos.screenWidth / 2;
const positionFromMouseEvent = (e) => {
    const { x, y } = e.target.getBoundingClientRect();
    const eventPosition = {
        x,
        y,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
    };

    const topBottom = aboveCentre(eventPosition) ? 'BOTTOM' : 'TOP';
    const leftRight = leftOfCentre(eventPosition) ? 'RIGHT' : 'LEFT';
    return TooltipPosition[`${topBottom}_${leftRight}`];
};

class Tooltip extends Component {
    state = {
        showTooltip: false,
        autoPosition: undefined,
    }

    getTooltipContents = () => {
        const { tooltip } = this.props;
        return typeof tooltip === 'string'
            ? <TooltipBox>{tooltip}</TooltipBox>
            : tooltip;
    }

    handleFocus = e =>
        this.setState({ showTooltip: true, autoPosition: positionFromMouseEvent(e) });

    handleBlur = () => this.setState({ showTooltip: false })

    render() {
        const position = this.props.position === TooltipPosition.AUTO
            ? this.state.autoPosition
            : this.props.position;
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
                    `uir-tooltip--${position}`,
                    this.props.className,
                )}
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleBlur}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                role="tooltip"
                tabIndex={this.props.tabIndex}
                style={this.props.style}
                {...proxyDataProps(this.props)}
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
