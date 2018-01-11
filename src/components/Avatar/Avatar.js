import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import InitialsPropType from '../../prop-types/initials';
import ListPropType from '../../prop-types/list';
import './Avatar.scss';

const propTypes = {
    className: PropTypes.string,
    hasHalo: PropTypes.bool,
    icon: PropTypes.element,
    initials: InitialsPropType,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    size: ListPropType(['xs', 'sm', 'md', 'lg']),
    src: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: null,
    hasHalo: false,
    initials: null,
    icon: null,
    onClick: null,
    size: 'md',
    src: null,
    style: null,
    tabIndex: 0,
};

class Avatar extends Component {
    handleClick = (event) => {
        const propsOnClick = this.props.onClick;
        if (propsOnClick) {
            propsOnClick(event);
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleClick(event);
        }
    }

    // NB: try not to rely on this fn
    //  in the future it may be removed
    calculateInitials = name => (name ? name.match(/\b\w/g).slice(0, 3).join('') : '?')

    shortenInitials = initials => initials.substr(0, 2);

    render() {
        const image = this.props.src
            ? <span className="uir-avatar-inner-img" style={{ backgroundImage: `url(${this.props.src})` }} />
            : null;
        const initials = (
            <span className="uir-avatar-inner-initials">
                {this.shortenInitials(this.props.initials
                    || this.calculateInitials(this.props.name))}
            </span>
        );
        const icon = this.props.icon
            ? <span className="uir-avatar-icon">{this.props.icon}</span>
            : null;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        // disabling aria role lint rule to allow for ternary operator
        return (
            <div
                className={cx(
                    'uir-avatar',
                    `uir-avatar--${this.props.size}`,
                    { 'uir-avatar--interactive': this.props.onClick },
                    { 'uir-avatar--halo': this.props.hasHalo },
                    this.props.className,
                )}
                aria-label={this.props.name}
                role={this.props.onClick ? 'button' : 'img'}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                tabIndex={this.props.tabIndex}
                style={this.props.style}
            >
                <span className="uir-avatar-inner">
                    {initials}
                    {image}
                </span>
                {icon}
            </div>
        );
        /* eslint-enable */
    }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
