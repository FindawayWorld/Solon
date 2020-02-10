const FormattedCurrency = ({
    value = null,
    currency = 'USD'
}) => new window.Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

export default FormattedCurrency;
