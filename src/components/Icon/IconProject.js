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
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    style: null,
    title: 'Project Icon',
};

const IconProject = ({
    className,
    style,
    title,
    ...props
}) => {
    lastInstanceId += 1;
    const iconTitleId = `icon-project-title-${lastInstanceId}`;

    return (
        <svg
            className={cx('uir-icon uir-icon-project', className)}
            style={style}
            viewBox="0 0 24 24"
            aria-labelledby={iconTitleId}
            {...proxyDataProps(props)}
        >
            <title id={iconTitleId}>{title}</title>
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <path d="M12 3.185L5.027 7.212v8.052L12 19.29l6.974-4.026V7.212L12 3.185zM12 2l8 4.619v9.238l-8 4.619-8-4.619V6.619L12 2z" />
            </g>
        </svg>
    );
};

IconProject.propTypes = propTypes;
IconProject.defaultProps = defaultProps;

export default IconProject;
