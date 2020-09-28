import PropTypes from 'prop-types';

const FormattedPlural = ({ value = 1, one = '', many = '' }) => (value === 1 ? one : many);

FormattedPlural.propTypes = {
    value: PropTypes.number.isRequired,
    one: PropTypes.string.isRequired,
    many: PropTypes.string.isRequired
};

export default FormattedPlural;
