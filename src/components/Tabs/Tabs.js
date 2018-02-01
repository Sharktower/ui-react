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
    constructor(props) {
        super(props);

        lastInstanceId += 1;

        this.state = {
            selectedIndex: this.props.selectedIndex,
        };
    }

    render() {
        const children = React.Children.map(this.props.children, (child) => {
            if (child.type === TabsNav) {
                return React.cloneElement(child, {
                    selectedIndex: this.state.selectedIndex,
                    onSelectTab: (selectedIndex) => {
                        this.setState({ selectedIndex });
                    },
                    tabsInstanceId: lastInstanceId,
                });
            } else if (child.type === TabsPanes) {
                return React.cloneElement(child, {
                    selectedIndex: this.state.selectedIndex,
                    tabsInstanceId: lastInstanceId,
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
