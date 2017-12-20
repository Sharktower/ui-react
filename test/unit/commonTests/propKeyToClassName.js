// Based on https://github.com/Semantic-Org/Semantic-UI-React/blob/master/test/specs/commonTests/implementsClassNameProps.js
/* global describe, expect, it, shallow */
import { createElement } from 'react';
import assertRequiredHelpers from './assertRequiredHelpers';
import getClassNameFromBoolPropKey from '../utils/getClassNameFromBoolPropKey';
import { noClassNameFromUndefinedProp } from '../../../test/unit/commonTests';

/**
 * Assert that only a Component prop's name is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export default (Component, propKey, options = {}) => {
    const {
        className = getClassNameFromBoolPropKey(Component, propKey),
        requiredProps = {},
    } = options;
    const { assertRequired } = assertRequiredHelpers('rendersChildren', Component);

    describe(`${propKey} (common)`, () => {
        assertRequired(Component, 'a `Component`');
        assertRequired(propKey, 'a `propKey`');

        noClassNameFromUndefinedProp(Component, propKey, [], options);

        it(`adds prop key derived className ${className}`, () => {
            const wrapper = shallow((
                createElement(Component, { ...requiredProps, [propKey]: true })
            ));

            expect(wrapper).to.have.className(className);
        });
    });
};
