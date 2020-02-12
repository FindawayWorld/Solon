const FormattedPlural = ({
    value = 1,
    one = '',
    many = ''
}) => (value === 1 ? one : many);

export default FormattedPlural;