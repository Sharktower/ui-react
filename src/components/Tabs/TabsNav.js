import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TabsTab from './TabsTab';
import './TabsNav.scss';

let lastInstanceId = 0;

const propTypes = {
    activeIndex: PropTypes.number,
    children: PropTypes.node,
    onActivateTab: PropTypes.func,
    tabsVisible: PropTypes.number,
};

const defaultProps = {
    activeIndex: null,
    children: null,
    onActivateTab: null,
    tabsVisible: null,
};

class TabsNav extends Component {
    constructor(props) {
        super(props);

        lastInstanceId += 1;
    }

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
                key={`tabs-nav-dropdown-${lastInstanceId}`}
                className={cx(
                    'uir-tabs-nav-dropdown',
                    { 'uir-tabs-nav-dropdown--open': this.state.isDropdownOpen },
                )}
                onBlur={this.handleDropdownBlur}
            >
                <button className="uir-tabs-nav-dropdown-trigger" onClick={this.handleDropdownTriggerClick}>...</button>
                <div className="uir-tabs-nav-dropdown-menu">
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
                    isActive: index === this.props.activeIndex,
                    onActivate: () => {
                        this.props.onActivateTab(index);
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
