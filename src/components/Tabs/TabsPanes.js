import React from 'react';
import PropTypes from 'prop-types';
import './TabsPanes.scss';

const propTypes = {
    children: PropTypes.node,
    selectedIndex: PropTypes.number,
    tabsInstanceId: PropTypes.number,
};

const defaultProps = {
    children: null,
    selectedIndex: null,
    tabsInstanceId: null,
};

const TabsPanes = ({
    children,
    selectedIndex,
    tabsInstanceId,
}) => {
    const newChildren = React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
            isSelected: index === selectedIndex,
            relatedTabId: `uir-tabs-tab-${tabsInstanceId}-${index}`,
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
