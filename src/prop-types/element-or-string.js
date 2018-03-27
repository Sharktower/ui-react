import PropTypes from 'prop-types';

const elementOrString = PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
]);

export default elementOrString;
