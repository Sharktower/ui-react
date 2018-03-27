import PropTypes from 'prop-types';

const styleObjectPropType = PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
]));

export default styleObjectPropType;
