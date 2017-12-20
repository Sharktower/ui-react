import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
};

const defaultProps = {
    style: null,
};

function Tooltip(props) {
    return (
        <div className="uir-tooltip" style={props.style}>
            {props.children}
        </div>
    );
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
