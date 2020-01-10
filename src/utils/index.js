export const titleCase = (str = '') => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};