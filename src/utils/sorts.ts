type Sortable = string | number | boolean;
interface SortFunction<T extends Sortable> {
    (a: T, b:T): -1|0|1
}
/**
 * Sort Ascending
 * [].sort((x, y) => asc(x, y));
 * [].sort((x, y) => asc(x.key, y.key));
 * @param a
 * @param b
 */
export const asc: SortFunction<Sortable> = (a : Sortable, b : Sortable) => {
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
export const desc: SortFunction<Sortable> = (a : Sortable, b : Sortable) => {
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

export const sorted = <T extends Sortable>(array: T[], sortCallback: SortFunction<T>) => {
    return [...array || []].sort(sortCallback);
};

const sorts = { asc, desc, sorted };

export default sorts;
