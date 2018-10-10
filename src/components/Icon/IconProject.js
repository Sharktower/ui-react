import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import './Icon.scss';

let lastInstanceId = 0;

const propTypes = {
    className: PropTypes.string,
    style: StyleObjectPropType,
};

const defaultProps = {
    className: null,
    style: null,
};

const IconProject = ({
    className,
    style,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-project-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-project', className)}
            style={style}
            viewBox="-4 -1 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>Project Icon</title>
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <path d="M8,1.155 L1.206,5.077 L1.206,12.923 L8,16.845 L14.794,12.923 L14.794,5.077 L8,1.155 Z M8,0 L15.794,4.5 L15.794,13.5 L8,18 L0.206,13.5 L0.206,4.5 L8,0 Z" fillRule="nonzero" />
            </g>
        </svg>
    );
};

IconProject.propTypes = propTypes;
IconProject.defaultProps = defaultProps;

export default IconProject;
