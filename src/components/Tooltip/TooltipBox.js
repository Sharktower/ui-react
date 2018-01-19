import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListPropType from '../../prop-types/list';
import StyleObjectPropType from '../../prop-types/style';
import { TooltipBoxStatus } from './TooltipEnums';
import './TooltipBox.scss';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
    status: ListPropType([
        TooltipBoxStatus.DEFAULT,
        TooltipBoxStatus.SUCCESS,
        TooltipBoxStatus.ERROR,
    ]),
    style: StyleObjectPropType(),
};

const defaultProps = {
    className: null,
    status: TooltipBoxStatus.DEFAULT,
    style: null,
};

function TooltipBox(props) {
    return (
        <div
            className={cx(
                'uir-tooltip-box',
                `uir-tooltip-box--${props.status}`,
                props.className,
            )}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

TooltipBox.propTypes = propTypes;
TooltipBox.defaultProps = defaultProps;

export default TooltipBox;
