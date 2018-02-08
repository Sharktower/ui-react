/* global expect, it, shallow */
import { createElement } from 'react';
import assertRequiredHelpers from './assertRequiredHelpers';

/**
 * Assert a component renders with the provided className.
 * @param {React.Component|Function} Component A component to test.
 * @param {String} className A className to test
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, className, options = {}) => {
    const { requiredProps = {} } = options;
    const { assertRequired } = assertRequiredHelpers('addsClassName', Component);

    assertRequired(Component, 'a `Component`');
    assertRequired(className, 'a `String`');

    it(`renders with class ${className} (common)`, () => {
        const wrapper = shallow(createElement(Component, requiredProps));

        expect(wrapper).to.have.className(className);
    });
};
