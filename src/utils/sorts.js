/**
 * Sort Ascending
 * [].sort((x, y) => asc(x, y));
 * [].sort((x, y) => asc(x.key, y.key));
 * @param a
 * @param b
 */
export const asc = (a, b) => {
    let at = typeof a === 'string' ? a.toLowerCase() : a;
    let bt = typeof b === 'string' ? b.toLowerCase() : b;
    if (at < bt) {
        return -1;
    } else if (at > bt) {
        return 1;
    } else {
        return 0;
    }
};

/**
 * Sort Descending
 * [].sort((x, y) => desc(x, y));
 * [].sort((x, y) => desc(x.key, y.key));
 * @param a
 * @param b
 */
export const desc = (a, b) => {
    let at = typeof a === 'string' ? a.toLowerCase() : a;
    let bt = typeof b === 'string' ? b.toLowerCase() : b;
    if (at > bt) {
        return -1;
    } else if (at < bt) {
        return 1;
    } else {
        return 0;
    }
};

export default { asc, desc };
