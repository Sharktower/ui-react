import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './DemoComponent.scss';

const DemoComponent = ({
    title,
    children,
    isDisabled,
    onClick,
}) => (
    <div role="button" tabIndex={0} className={cx('uir-demo-component', { 'uir-demo-component--disabled': isDisabled })} onClick={onClick} onKeyPress={onClick}>
        <div className="uir-demo-component--title"><h2>{title}</h2></div>
        <div className="uir-demo-component--content">{children}</div>
    </div>
);

DemoComponent.defaultProps = {
    children: null,
    isDisabled: false,
    onClick: () => { },
    title: 'Demo',
};

DemoComponent.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    isDisabled: PropTypes.bool,
};

export default DemoComponent;