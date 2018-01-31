import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TabsPane.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isSelected: PropTypes.bool,
};

const defaultProps = {
    children: null,
    className: null,
    isSelected: false,
};

class TabsPane extends Component {
    state = {
        isDeselecting: false,
        isSelecting: false,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.isSelected && !nextProps.isSelected) {
            this.setState({
                isDeselecting: true,
                isSelecting: false,
            });
        } else if (!this.props.isSelected && nextProps.isSelected) {
            this.setState({
                isDeselecting: false,
                isSelecting: true,
            });
        } else {
            this.setState({
                isDeselecting: false,
                isSelecting: false,
            });
        }
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
