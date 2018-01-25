import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    activeIndex: PropTypes.number,
    children: PropTypes.node,
};

const defaultProps = {
    activeIndex: null,
    children: null,
};

const TabsPanes = ({
    activeIndex,
    children,
}) => (
    <div className="uir-tabs-panes">
        {children[activeIndex]}
    </div>
);

TabsPanes.propTypes = propTypes;
TabsPanes.defaultProps = defaultProps;

export default TabsPanes;
