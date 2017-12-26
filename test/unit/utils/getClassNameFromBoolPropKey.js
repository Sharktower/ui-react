/**
 * Convert camelCased string to hyphen-separated string.
 * Taken from https://stackoverflow.com/a/36731580
 * @param {String} text The string to convert
 */
function convertCamelCaseToDash(text) {
    return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

/**
 * Get className derived from Component name and a boolean prop key name
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 */
export default (Component, propKey) => {
    const nameFromPropKey = propKey.indexOf('is') === 0 ?
        convertCamelCaseToDash(propKey.replace('is', '')) :
        propKey;

    return `uir-${convertCamelCaseToDash(Component.name)}--${nameFromPropKey}`;
};
