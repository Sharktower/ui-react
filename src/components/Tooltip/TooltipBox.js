import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './TooltipBox.scss';

const propTypes = {
    children: PropTypes.element.isRequired,
    status: PropTypes.oneOf(['default', 'success', 'error']),
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
};

const defaultProps = {
    status: 'default',
    className: null,
    style: null,
};

function TooltipBox(props) {
    return (
        <div className={cx('uir-tooltip-box', `uir-tooltip-box--${props.status}`, props.className)} style={props.style}>
            {props.children}
        </div>
    );
}

TooltipBox.propTypes = propTypes;
TooltipBox.defaultProps = defaultProps;

export default TooltipBox;
