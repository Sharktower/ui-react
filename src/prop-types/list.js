import PropTypes from 'prop-types';

function createListPropType() {
    function list(expectedValues) {
        const oneOf = PropTypes.oneOf(expectedValues);
        oneOf.expectedValues = expectedValues;
        return oneOf;
    }
    return list;
}

const listPropType = createListPropType();

export default listPropType;
