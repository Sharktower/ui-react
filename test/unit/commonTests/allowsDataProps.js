/* global expect, it, shallow */
import { createElement } from 'react';
import { merge } from 'lodash';
import assertRequiredHelpers from './assertRequiredHelpers';

/**
 * Assert a component renders with the provided data- prefixed props.
 * @param {React.Component|Function} Component A component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
    const { requiredProps = {} } = options;
    const { assertRequired } = assertRequiredHelpers('allowsDataProps', Component);

    assertRequired(Component, 'a `Component`');

    const propsWithData = merge(
        {},
        requiredProps,
        { 'data-testProp': 'testProp-123' },
    );

    it('renders with the provided data- prop (common)', () => {
        const wrapper = shallow(createElement(Component, propsWithData));

        // Note: rendered html atrributes are automatically lowercased, hence the difference
        expect(wrapper).to.have.attr('data-testprop', 'testProp-123');
    });
};
