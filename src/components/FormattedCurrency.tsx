interface FormattedCurrencyProps {
    value: number;
    currency?: string;
}

const FormattedCurrency = ({ value = 0, currency = 'USD' }: FormattedCurrencyProps) => {
    if (typeof window !== 'undefined') {
        return new window.Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
    }
    return null;
};

export default FormattedCurrency;
