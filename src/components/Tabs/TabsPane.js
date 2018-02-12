import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TabsPane.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isSelected: PropTypes.bool,
    relatedTabId: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
    isSelected: false,
    relatedTabId: null,
};

class TabsPane extends Component {
    state = {
        isDeselecting: false,
        isSelecting: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            isDeselecting: this.props.isSelected && !nextProps.isSelected,
            isSelecting: !this.props.isSelected && nextProps.isSelected,
        });
    }

    focusPane() {
        if (!this.componentRef) { return; }

        // Use timeout to ensure focus is applied to the pane
        // and not the tab element which triggered rerender
        setTimeout(() => {
            this.componentRef.focus();
        }, 0);
    }

    handleRef = (ref) => {
        this.componentRef = ref;
    }

    render() {
        this.focusPane();

        return (
            <section
                aria-hidden={!this.props.isSelected}
                aria-labelledby={this.props.relatedTabId}
                className={cx(
                    'uir-tabs-pane',
                    {
                        'uir-tabs-pane--selected': this.props.isSelected && !this.state.isSelecting,
                        'uir-tabs-pane--selecting': this.state.isSelecting,
                        'uir-tabs-pane--deselecting': this.state.isDeselecting,
                    },
                    this.props.className,
                )}
                ref={this.handleRef}
                tabIndex="-1"
            >
                {this.props.children}
            </section>
        );
    }
}

TabsPane.propTypes = propTypes;
TabsPane.defaultProps = defaultProps;

export default TabsPane;
