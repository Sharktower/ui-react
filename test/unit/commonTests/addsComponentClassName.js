import assertRequiredHelpers from './assertRequiredHelpers';
import addsClassName from './addsClassName';
import { getClassNameFromComponentName } from '../utils';

/**
 * Assert a component renders with the correct className derived from component name.
 * @param {React.Component|Function} Component A component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
    const { assertRequired } = assertRequiredHelpers('addsComponentClassName', Component);

    assertRequired(Component, 'a `Component`');

    const className = getClassNameFromComponentName(Component);

    addsClassName(Component, className, options);
};
