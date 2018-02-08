/* global expect, it, shallow */
import { createElement } from 'react';
import assertRequiredHelpers from './assertRequiredHelpers';

/**
 * Assert a component renders the provided tag.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {String} tagName
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, tagName, options = {}) => {
    const { requiredProps = {} } = options;
    const { assertRequired } = assertRequiredHelpers('rendersTag', Component);

    assertRequired(Component, 'a `Component`');
    assertRequired(tagName, 'a `String`');

    it(`renders an HTML tag: ${tagName} (common)`, () => {
        const wrapper = shallow(createElement(Component, requiredProps));

        expect(wrapper).to.have.tagName(tagName);
    });
};
