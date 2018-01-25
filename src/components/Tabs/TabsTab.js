import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    onActivate: PropTypes.func,
};

const defaultProps = {
    children: null,
    className: null,
    isActive: false,
    onActivate: null,
};

const TabsTab = ({
    children,
    className,
    isActive,
    onActivate,
}) => (
    <Button
        className={cx(
            'uir-tabs-tab',
            className,
        )}
        isActive={isActive}
        onClick={onActivate}
        variant="clear"
    >
        {children}
    </Button>
);

TabsTab.propTypes = propTypes;
TabsTab.defaultProps = defaultProps;

export default TabsTab;
