import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import IconRequired from '../Icon/IconRequired';
import './RequiredIconAndTooltip.scss';

export default function (showRequiredIcon, tooltipMessage) {
    return showRequiredIcon ?
        <Tooltip tooltip={tooltipMessage} className="icon-required-tooltip"><IconRequired /></Tooltip> :
        null;
}
