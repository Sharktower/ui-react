function nullOrUndefined(variable) {
    return typeof variable === 'undefined' || variable === null;
}

function createInitialsPropType(isRequired) {
    function initials(props, propName, componentName) {
        const property = props[propName];
        if (nullOrUndefined(property) && isRequired) {
            return new Error(`The prop \`${propName}\` is marked as required in \`${componentName}\``);
        }
        if (nullOrUndefined(property) === false
            && (property.length < 1 || property.length > 2)) {
            return new Error(`Initials supplied to \`${componentName}\` should be 1 or 2 characters`);
        }
        return null;
    }
    return initials;
}

const initialsPropType = createInitialsPropType(false);
initialsPropType.isRequired = createInitialsPropType(true);

export default initialsPropType;
