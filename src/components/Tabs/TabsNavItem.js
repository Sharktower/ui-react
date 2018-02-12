import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';
import './TabsNavItem.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isDisabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    isDisabled: null,
    isSelected: false,
    onSelect: null,
};

const TabsNavItem = ({
    children,
    className,
    id,
    isDisabled,
    isSelected,
    onSelect,
}) => (
    <Button
        className={cx(
            'uir-tabs-nav-item',
            className,
        )}
        id={id}
        isActive={isSelected}
        isDisabled={isDisabled}
        onClick={onSelect}
        variant="clear"
    >
        {children}
    </Button>
);

TabsNavItem.propTypes = propTypes;
TabsNavItem.defaultProps = defaultProps;

export default TabsNavItem;
