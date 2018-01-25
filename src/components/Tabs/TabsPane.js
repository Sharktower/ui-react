import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TabsPane.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
};

class Tab extends Component {
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

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
