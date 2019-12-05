import { TooltipPosition } from './TooltipEnums';

export function calculateTopPosition(position, wrapperSize, tooltipSize, tooltipOffset) {
    return ({
        [TooltipPosition.TOP_CENTER]:
                -(tooltipSize.height + tooltipOffset),
        [TooltipPosition.RIGHT]:
                Math.floor((wrapperSize.height - tooltipSize.height) / 2),
        [TooltipPosition.LEFT]:
                Math.floor((wrapperSize.height - tooltipSize.height) / 2),
        [TooltipPosition.BOTTOM_RIGHT]:
                wrapperSize.height,
        [TooltipPosition.BOTTOM_LEFT]:
                wrapperSize.height,
        [TooltipPosition.BOTTOM_CENTER]:
                wrapperSize.height + tooltipOffset,
        [TooltipPosition.TOP_RIGHT]:
                -(tooltipSize.height),
        [TooltipPosition.TOP_LEFT]:
                -(tooltipSize.height),
    })[position];
}

export function calculateLeftPosition(position, wrapperSize, tooltipSize, tooltipOffset) {
    return ({
        [TooltipPosition.TOP_CENTER]:
                Math.floor((wrapperSize.width - tooltipSize.width) / 2),
        [TooltipPosition.BOTTOM_CENTER]:
                Math.floor((wrapperSize.width - tooltipSize.width) / 2),
        [TooltipPosition.BOTTOM_LEFT]:
                -(tooltipSize.width + tooltipOffset),
        [TooltipPosition.LEFT]:
                -(tooltipSize.width + tooltipOffset),
        [TooltipPosition.TOP_LEFT]:
                -(tooltipSize.width + tooltipOffset),
        [TooltipPosition.TOP_RIGHT]:
                wrapperSize.width + tooltipOffset,
        [TooltipPosition.RIGHT]:
                wrapperSize.width + tooltipOffset,
        [TooltipPosition.BOTTOM_RIGHT]:
                wrapperSize.width + tooltipOffset,
    })[position];
}


const aboveCentre = pos => pos.top < pos.screenHeight / 2;
const leftOfCentre = pos => pos.left < pos.screenWidth / 2;
export const calculateAutoPosition = ({ left, top }) => {
    const eventPosition = {
        top,
        left,
        screenWidth: global.window.innerWidth,
        screenHeight: global.window.innerHeight,
    };

    const topBottom = aboveCentre(eventPosition) ? 'BOTTOM' : 'TOP';
    const leftRight = leftOfCentre(eventPosition) ? 'RIGHT' : 'LEFT';
    return TooltipPosition[`${topBottom}_${leftRight}`];
};
