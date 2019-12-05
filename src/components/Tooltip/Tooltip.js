import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ElementOrStringPropType from '../../prop-types/element-or-string';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import TooltipBox from './TooltipBox';
import { TooltipPosition } from './TooltipEnums';
import { calculateTopPosition, calculateLeftPosition, calculateAutoPosition } from './calculatePosition';
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
        this.setPosition();
    }

    getTooltipContents = () => {
        const { tooltip } = this.props;
        return typeof tooltip === 'string'
            ? <TooltipBox>{tooltip}</TooltipBox>
            : tooltip;
    }

    getLeftPosition = (position = TooltipPosition.BOTTOM_RIGHT) => {
        const { wrapperSize, tooltipSize } = this.state;
        const { tooltipOffset } = this.props;
        const leftPosition = calculateLeftPosition(
            position,
            wrapperSize,
            tooltipSize,
            tooltipOffset,
        );
        return leftPosition;
    }

    getTopPosition = (position = TooltipPosition.TOP_LEFT) => {
        const { wrapperSize, tooltipSize } = this.state;
        const { tooltipOffset } = this.props;
        const topPosition = calculateTopPosition(position, wrapperSize, tooltipSize, tooltipOffset);
        return topPosition;
    }

    setPosition = () => {
        const showTooltip = this.props.showTooltip || this.state.showTooltip;
        if (showTooltip && this.wrapper && this.tooltipElement) {
            const wrapperBounding = this.wrapper.getBoundingClientRect();
            const tooltipBounding = this.tooltipElement.getBoundingClientRect();

            this.setState({
                wrapperSize: {
                    height: wrapperBounding.height,
                    width: wrapperBounding.width,
                },
                tooltipSize: {
                    height: tooltipBounding.height,
                    width: tooltipBounding.width,
                },
                autoPosition: calculateAutoPosition(wrapperBounding),
            });
        }
    }

    handleFocus = () => {
        this.setState({ showTooltip: true }, () => {
            this.setPosition();
        });
    }

    handleBlur = () => {
        this.setState({ showTooltip: false });
    }

    render() {
        const position = this.props.position === TooltipPosition.AUTO
            ? this.state.autoPosition
            : this.props.position;
        const showTooltip = this.props.showTooltip !== null
            ? this.props.showTooltip
            : this.state.showTooltip;
        const topPosition = this.getTopPosition(position);
        const leftPosition = this.getLeftPosition(position);

        const tooltip = showTooltip ? (
            <div
                className="uir-tooltip-contents"
                ref={(divElement) => { this.tooltipElement = divElement; }}
                style={{
                    top: `${topPosition}px`,
                    left: `${leftPosition}px`,
                }}
            >
                {this.getTooltipContents()}
            </div>
        ) : null;

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
