// Based on https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/specs/commonTests/implementsClassNameProps.js
/* global describe, expect, it, mount */
import { createElement } from 'react';
import assertRequiredHelpers from './assertRequiredHelpers';
import noClassNameFromUndefinedProp from './noClassNameFromUndefinedProp';
import { getClassNameFromBoolPropKey } from '../utils';

/**
 * Assert that only a Component prop's name is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {String} [options.className=propKey] The className to assert exists.
 */
export default (Component, propKey, options = {}) => {
    const {
        className = getClassNameFromBoolPropKey(Component, propKey),
        requiredProps = {},
    } = options;
    const { assertRequired } = assertRequiredHelpers('propKeyToClassName', Component);

    describe(`${propKey} (common)`, () => {
        assertRequired(Component, 'a `Component`');
        assertRequired(propKey, 'a `propKey`');

        noClassNameFromUndefinedProp(Component, propKey, [], options);

        it(`adds prop key derived className ${className}`, () => {
            const wrapper = mount((
                createElement(Component, { ...requiredProps, [propKey]: true })
            ));

            expect(wrapper).to.have.className(className);
        });
    });
};
