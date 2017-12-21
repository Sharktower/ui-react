import React from 'react';
import PropTypes from 'prop-types';
import './TooltipBox.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    style: null,
};

function TooltipBox(props) {
    return (
        <div className="uir-tooltip-box" style={props.style}>
            {props.children}
        </div>
    );
}

TooltipBox.propTypes = propTypes;
TooltipBox.defaultProps = defaultProps;

export default TooltipBox;
