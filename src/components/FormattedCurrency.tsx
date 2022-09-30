interface FormattedCurrencyProps {
    value: number;
    currency?: string;
}

const FormattedCurrency = ({ value = 0, currency = 'USD' }: FormattedCurrencyProps) =>
    new window.Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

export default FormattedCurrency;
