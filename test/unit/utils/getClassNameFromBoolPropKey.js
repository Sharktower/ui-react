/**
 * Get className derived from Component name and a boolean prop key name
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 */
export default (Component, propKey) => {
    const nameFromPropKey = propKey.indexOf('is') === 0 ? propKey.replace('is', '').toLowerCase() : propKey;

    return `uir-${Component.name}-${nameFromPropKey}`;
};
