import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import TabsNav from './TabsNav';
import TabsPanes from './TabsPanes';
import TabsPane from './TabsPane';
import TabsTab from './TabsTab';

const propTypes = {
    selectedIndex: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    style: StyleObjectPropType(),
};

const defaultProps = {
    selectedIndex: 0,
    children: null,
    className: null,
    style: null,
};

class Tabs extends Component {
    state = {
        selectedIndex: this.props.selectedIndex,
    };

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            if (child.type === TabsNav) {
                return React.cloneElement(child, {
                    selectedIndex: this.state.selectedIndex,
                    onActivateTab: (selectedIndex) => {
                        this.setState({ selectedIndex });
                    },
                });
            } else if (child.type === TabsPanes) {
                return React.cloneElement(child, {
                    selectedIndex: this.state.selectedIndex,
                });
            }

            return child;
        });

        return (
            <div className={cx('uir-tabs', this.props.className)} style={this.props.style}>
                {children}
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
