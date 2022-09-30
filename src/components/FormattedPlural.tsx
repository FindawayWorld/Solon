interface FormattedPluralProps {
    value: number;
    one: string;
    many: string;
}

const FormattedPlural = ({ value = 1, one = '', many = '' }: FormattedPluralProps) => (value === 1 ? one : many);

export default FormattedPlural;
