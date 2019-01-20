/* global describe, expect, it, shallow */
import { createElement } from 'react';
import { merge } from 'lodash';
import assertRequiredHelpers from './assertRequiredHelpers';
import addsClassName from './addsClassName';
import isConformant from './isConformant';

/**
 * Assert Component conforms to guidelines that are applicable to all icon components.
 * @param {React.Component|Function} Component A component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {String} [options.tagName='svg'] HTML tag name that should be rendered by the component.
 */
export default (Component, options = {}) => {
    const {
        tagName = 'svg',
        requiredProps = {},
    } = options;
    const { assertRequired } = assertRequiredHelpers('addsClassName', Component);

    assertRequired(Component, 'a `Component`');

    isConformant(Component, { tagName });

    describe('isConformantIcon (common)', () => {
        addsClassName(Component, 'uir-icon');

        it('sets title', () => {
            const propsWithTitle = merge(
                {},
                requiredProps,
                { title: 'Test title' },
            );
            const wrapper = shallow(createElement(Component, propsWithTitle));

            expect(wrapper.find('title')).to.have.text('Test title');
        });
    });
};
