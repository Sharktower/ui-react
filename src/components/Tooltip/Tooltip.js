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
        TooltipPosition.LEFT,
        TooltipPosition.RIGHT,
        TooltipPosition.AUTO,
    ]),
    showTooltip: PropTypes.bool,
    style: StyleObjectPropType,
    tabIndex: PropTypes.number,
    tooltip: ElementOrStringPropType.isRequired,
    tooltipOffset: PropTypes.number,
};

const defaultProps = {
    className: null,
    position: TooltipPosition.TOP_CENTER,
    showTooltip: null,
    style: null,
    tabIndex: -1,
    tooltipOffset: 10,
};


const aboveCentre = pos => pos.y < pos.screenHeight / 2;
const leftOfCentre = pos => pos.x < pos.screenWidth / 2;
const positionFromFocusEvent = (e) => {
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
        showTooltip: this.showTooltip || false,
        wrapperSize: {
            width: 0,
            height: 0,
        },
        tooltipSize: {
            width: 0,
            height: 0,
        },
        autoPosition: undefined,
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.wrapper && this.tooltipElement) {
                const wrapperSize = {
                    width: this.wrapper.clientWidth,
                    height: this.wrapper.clientHeight,
                };

                const tooltipSize = {
                    width: this.tooltipElement.clientWidth,
                    height: this.tooltipElement.clientHeight,
                };

                this.setState({ wrapperSize, tooltipSize });
            }
        }, 1);
    }

    getTooltipContents = () => {
        const { tooltip } = this.props;
        return typeof tooltip === 'string'
            ? <TooltipBox>{tooltip}</TooltipBox>
            : tooltip;
    }

    handleFocus = e =>
        this.setState({ showTooltip: true, autoPosition: positionFromFocusEvent(e) });

    handleBlur = () => this.setState({ showTooltip: false })

    leftPosition = (position) => {
        switch (position) {
        case TooltipPosition.TOP_CENTER:
        case TooltipPosition.BOTTOM_CENTER:
            return Math.floor((this.state.wrapperSize.width - this.state.tooltipSize.width) / 2);
        case TooltipPosition.BOTTOM_LEFT:
        case TooltipPosition.LEFT:
        case TooltipPosition.TOP_LEFT:
            return -(this.state.tooltipSize.width + this.props.tooltipOffset);
        case TooltipPosition.TOP_RIGHT:
        case TooltipPosition.RIGHT:
        case TooltipPosition.BOTTOM_RIGHT:
        default:
            return this.state.wrapperSize.width + this.props.tooltipOffset;
        }
    };

    topPosition = (position) => {
        switch (position) {
        case TooltipPosition.TOP_CENTER:
            return -(this.state.tooltipSize.height + this.props.tooltipOffset);
        case TooltipPosition.RIGHT:
        case TooltipPosition.LEFT:
            return Math.floor((this.state.wrapperSize.height - this.state.tooltipSize.height) / 2);
        case TooltipPosition.BOTTOM_RIGHT:
        case TooltipPosition.BOTTOM_LEFT:
            return this.state.wrapperSize.height;
        case TooltipPosition.BOTTOM_CENTER:
            return this.state.wrapperSize.height + this.props.tooltipOffset;
        case TooltipPosition.TOP_RIGHT:
        case TooltipPosition.TOP_LEFT:
        default:
            return -(this.state.tooltipSize.height);
        }
    };

    render() {
        const position = this.props.position === TooltipPosition.AUTO
            ? this.state.autoPosition
            : this.props.position;
        const showTooltip = this.props.showTooltip !== null
            ? this.props.showTooltip
            : this.state.showTooltip;

        const tooltip = (
            <div
                className="uir-tooltip-contents"
                ref={(divElement) => { this.tooltipElement = divElement; }}
                style={{
                    top: `${this.topPosition(position)}px`,
                    left: `${this.leftPosition(position)}px`,
                    opacity: showTooltip ? 1 : 0,
                    zIndex: showTooltip ? 1000 : -1,
                }}
            >
                {this.getTooltipContents()}
            </div>
        );

        return (
            <div
                className={cx(
                    'uir-tooltip',
                    this.props.className,
                )}
                role="tooltip"
                tabIndex={this.props.tabIndex}
                style={this.props.style}
                {...proxyDataProps(this.props)}
            >
                {tooltip}
                <div
                    className="uir-tooltip-inner"
                    onMouseEnter={this.handleFocus}
                    onMouseLeave={this.handleBlur}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    ref={(divElement) => { this.wrapper = divElement; }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
