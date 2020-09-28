import PropTypes from 'prop-types';

const FormattedCurrency = ({ value = null, currency = 'USD' }) =>
    new window.Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

FormattedCurrency.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string
};

export default FormattedCurrency;
