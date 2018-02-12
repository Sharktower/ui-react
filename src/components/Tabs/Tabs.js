import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import TabsNav from './TabsNav';
import TabsPanes from './TabsPanes';
import TabsPane from './TabsPane';
import TabsTab from './TabsTab';

let lastInstanceId = 0;

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectedIndex: PropTypes.number,
    style: StyleObjectPropType(),
    tabsVisible: PropTypes.number,
};

const defaultProps = {
    children: null,
    className: null,
    selectedIndex: 0,
    style: null,
    tabsVisible: null,
};

class Tabs extends Component {
    constructor(props) {
        super(props);

        lastInstanceId += 1;

        this.state = {
            selectedIndex: this.props.selectedIndex,
        };
    }

    getTabsChildren() {
        return React.Children.map(this.props.children, (child) => {
            if (child.type === TabsNav) {
                return this.getTabsNav(child);
            } else if (child.type === TabsPanes) {
                return this.getTabsPanes(child);
            }

            return child;
        });
    }

    getTabsNav(child) {
        return React.cloneElement(child, {
            selectedIndex: this.state.selectedIndex,
            onSelectTab: (selectedIndex) => {
                this.setState({ selectedIndex });
            },
            tabsInstanceId: lastInstanceId,
            tabsVisible: this.props.tabsVisible,
        });
    }

    getTabsPanes(child) {
        return React.cloneElement(child, {
            selectedIndex: this.state.selectedIndex,
            tabsInstanceId: lastInstanceId,
        });
    }

    render() {
        return (
            <div className={cx('uir-tabs', this.props.className)} style={this.props.style}>
                {this.getTabsChildren()}
            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Nav = TabsNav;
Tabs.Tab = TabsTab;
Tabs.Panes = TabsPanes;
Tabs.Pane = TabsPane;

export default Tabs;
