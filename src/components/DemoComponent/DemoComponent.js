import React from 'react';
import PropTypes from 'prop-types';
import './DemoComponent.css';

const DemoComponent = ({title, children, onClick}) => (
  <div className='ui-demo-component' onClick={onClick}>
    <div className="ui-demo-component--title"><h2>{title}</h2></div>
    <div className="ui-demo-component--content">{children}</div>
  </div>
)

DemoComponent.defaultProps = {
    title: "Demo",
    onClick: () => {},
};

DemoComponent.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default DemoComponent;