/* global describe, expect, it, shallow */
import { createElement } from 'react';
import { merge } from 'lodash';
import assertRequiredHelpers from './assertRequiredHelpers';
import addsComponentClassName from './addsComponentClassName';
import rendersChildren from './rendersChildren';
import rendersTag from './rendersTag';
import addsClassName from './addsClassName';

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Boolean} [options.rendersChildren=false] Can this component render children of any type?
 * @param {String} [options.tagName='div'] HTML tag name that should be rendered by the component.
 */
export default (Component, options = {}) => {
    const {
        tagName = 'div',
        rendersChildren: rendersAnyChildren = false,
        requiredProps = {},
    } = options;
    const { assertRequired } = assertRequiredHelpers('addsClassName', Component);

    assertRequired(Component, 'a `Component`');

    describe('isConformant (common)', () => {
        addsComponentClassName(Component, options);
        rendersTag(Component, tagName, options);

        // Every component should implement the className prop
        describe('className prop', () => {
            const testClassName = 'test-class-example';
            const optionsWithClassName = merge(
                {},
                options,
                { requiredProps: { className: testClassName } },
            );
            addsClassName(Component, testClassName, optionsWithClassName);
        });

        // Every component should implement the style prop
        describe('style prop', () => {
            const propsWithStyle = merge(
                {},
                requiredProps,
                { style: { width: 2, color: '#ff0000' } },
            );

            it('renders with provided style', () => {
                const wrapper = shallow(createElement(Component, propsWithStyle));

                expect(wrapper).to.have.attr('style', 'width:2px;color:#ff0000');
            });
        });

        if (rendersAnyChildren) {
            rendersChildren(Component, options);
        }
    });
};
