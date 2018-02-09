// Based on https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/specs/commonTests/classNameHelpers.js
/* global expect, it, shallow */
import React from 'react';
import { getClassNameFromBoolPropKey } from '../utils';

/**
 * Assert that a Component prop's name is not converted to className when prop is not defined.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {array} [propValues] Array of possible values of prop.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {String} [options.className=propKey] The className to assert exists.
 */
export default (Component, propKey, propValues, options = {}) => {
    const { defaultProps = {} } = Component;
    const {
        className = getClassNameFromBoolPropKey(Component, propKey),
        requiredProps = {},
    } = options;
    // Required props may include a prop that creates a className.
    // If so, we cannot assert that it doesn't exist by default because it is required to exist.
    // Skip assertions for required props.
    if (propKey in defaultProps && defaultProps[propKey]) return;
    if (propKey in requiredProps) return;

    it(`does not add className ${className} when prop not defined`, () => {
        const wrapper = shallow(<Component {...requiredProps} />);

        expect(wrapper).to.not.have.className(className);

        // Ensure that none of the prop option values are in className
        propValues.forEach(propValue =>
            expect(wrapper).not.to.have.className(propValue.toString()));
    });
};
