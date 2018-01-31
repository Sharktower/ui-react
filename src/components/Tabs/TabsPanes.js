import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    selectedIndex: PropTypes.number,
    children: PropTypes.node,
};

const defaultProps = {
    selectedIndex: null,
    children: null,
};

const TabsPanes = ({
    selectedIndex,
    children,
}) => {
    const newChildren = React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
            isSelected: index === selectedIndex,
        }));

    return (
        <div className="uir-tabs-panes">
            {newChildren}
        </div>
    );
};

TabsPanes.propTypes = propTypes;
TabsPanes.defaultProps = defaultProps;

export default TabsPanes;
