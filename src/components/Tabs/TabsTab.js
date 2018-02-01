import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';
import './TabsTab.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    isSelected: false,
    onSelect: null,
};

const TabsTab = ({
    children,
    className,
    id,
    isSelected,
    onSelect,
}) => (
    <Button
        className={cx(
            'uir-tabs-tab',
            className,
        )}
        id={id}
        isActive={isSelected}
        onClick={onSelect}
        variant="clear"
    >
        {children}
    </Button>
);

TabsTab.propTypes = propTypes;
TabsTab.defaultProps = defaultProps;

export default TabsTab;
