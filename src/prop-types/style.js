import PropTypes from 'prop-types';

function createStyleObjectPropType() {
    function style() {
        return PropTypes.objectOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]));
    }
    return style;
}

const styleObjectPropType = createStyleObjectPropType();

export default styleObjectPropType;
