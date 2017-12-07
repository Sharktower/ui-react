import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './DemoComponent.css';

const DemoComponent = ({title, children, isDisabled, onClick}) => (
  <div className={cx('ui-demo-component', {'is-disabled': isDisabled})} onClick={onClick}>
    <div className="ui-demo-component--title"><h2>{title}</h2></div>
    <div className="ui-demo-component--content">{children}</div>
  </div>
)

DemoComponent.defaultProps = {
    title: "Demo",
    onClick: () => {}
};

DemoComponent.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    isDisabled: PropTypes.bool
}

export default DemoComponent;
