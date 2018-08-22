import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import ListPropType from '../../prop-types/list';
import { IconPriority } from './IconEnums';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType,
    priority: ListPropType([
        IconPriority.NONE,
        IconPriority.LOW,
        IconPriority.MEDIUM,
        IconPriority.HIGH,
    ]),
    isBlocked: PropTypes.bool,
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    priority: IconPriority.NONE,
    isBlocked: false,
    title: 'Story Icon',
};

const IconStory = ({
    className,
    style,
    priority,
    isBlocked,
    title,
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-story-title-${lastInstanceId}`;
    return (
        <svg
            className={cx(
                'uir-icon uir-icon-story',
                `uir-icon-story--${priority}`,
                { 'uir-icon-story--blocked': isBlocked },
                className,
            )}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
        >
            <title id={iconTitleId}>{title}</title>
            <rect x="13.2" y="6.2" className="uir-icon-line-a" width="8.5" height="1.5" />
            <rect x="2" y="13.2" className="uir-icon-line-b" width="20" height="1.5" />
            <rect x="2" y="19.2" className="uir-icon-line-c" width="20" height="1.5" />
            <polygon
                className="uir-icon-shape"
                points="9,4.9 9,3.5 2,3.5 2,4.9 2,6.3 2,7.7 7.6,7.7 7.6,9.1 2,9.1 2,10.5 9,10.5 9,9.1 9,7.7 9,6.3 3.4,6.3 3.4,4.9"
            />
        </svg>
    );
};

IconStory.propTypes = propTypes;
IconStory.defaultProps = defaultProps;

export default IconStory;
