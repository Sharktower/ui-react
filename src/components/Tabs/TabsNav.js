import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TabsTab from './TabsTab';
import Button from './../Button/Button';
import IconMore from './../Icon/IconMore';
import './TabsNav.scss';

const propTypes = {
    children: PropTypes.node,
    onSelectTab: PropTypes.func,
    selectedIndex: PropTypes.number,
    tabsInstanceId: PropTypes.number,
    tabsVisible: PropTypes.number,
};

const defaultProps = {
    children: null,
    onSelectTab: null,
    selectedIndex: null,
    tabsInstanceId: null,
    tabsVisible: null,
};

class TabsNav extends Component {
    state = {
        isDropdownOpen: false,
    }

    addNavDropdown(children) {
        const tabs = React.Children.toArray(children);
        const visibleTabs = tabs.slice(0, this.props.tabsVisible);
        const dropdownTabs = tabs.slice(this.props.tabsVisible);
        const newChildren = visibleTabs;

        newChildren.push((
            <div
                key={`uir-tabs-nav-dropdown-${this.props.tabsInstanceId}`}
                className={cx(
                    'uir-tabs-nav-dropdown',
                    { 'uir-tabs-nav-dropdown--open': this.state.isDropdownOpen },
                )}
                onBlur={this.handleDropdownBlur}
            >
                <Button
                    className="uir-tabs-nav-dropdown-trigger"
                    icon={<IconMore />}
                    onClick={this.handleDropdownTriggerClick}
                    variant="clear"
                />
                <div className="uir-tabs-nav-dropdown-panel">
                    {dropdownTabs}
                </div>
            </div>
        ));

        return newChildren;
    }

    handleDropdownBlur = (event) => {
        // Taken from: https://stackoverflow.com/a/44378829
        // currentTarget refers to this component.
        // relatedTarget refers to the element where the user clicked (or focused) which
        // triggered this event.
        // So in effect, this condition checks if the user clicked outside the component.
        if (!event.currentTarget.contains(event.relatedTarget)) {
            this.setState({
                isDropdownOpen: false,
            });
        }
    }

    handleDropdownTriggerClick = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen,
        });
    }

    render() {
        let children = React.Children.map(this.props.children, (child, index) => {
            if (child.type === TabsTab) {
                return React.cloneElement(child, {
                    id: `uir-tabs-tab-${this.props.tabsInstanceId}-${index}`,
                    isSelected: index === this.props.selectedIndex,
                    onSelect: () => {
                        this.setState({
                            isDropdownOpen: false,
                        }, () => {
                            this.props.onSelectTab(index);
                        });
                    },
                });
            }

            return null;
        });

        if (this.props.tabsVisible !== null &&
            this.props.tabsVisible >= 0 &&
            this.props.tabsVisible < children.length) {
            children = this.addNavDropdown(children);
        }

        return (
            <div className="uir-tabs-nav">
                {children}
            </div>
        );
    }
}

TabsNav.propTypes = propTypes;
TabsNav.defaultProps = defaultProps;

export default TabsNav;
