export const titleCase = (str = '') => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export const demangle = (title = '') => {
    if (!title) {
        return '';
    }
    // "Hunger Games, The" -> "The Hunger Games"
    var articles = ['The', 'An', 'A'];
    var fragments = title.split(': ');
    // accounts for "Shell Game, The: A Fox and O'Hare Short Story"
    fragments.forEach((fragment, i) => {
        articles.forEach((article) => {
            var splitIndex = (article.length + 2) * -1; // +2 adds room for ", " — negative means start from the end of the string
            if (fragment.slice(splitIndex) === ', ' + article) {
                var newFragment = article + ' ' + fragment.slice(0, splitIndex);
                fragments[i] = newFragment;
            }
        });
    });
    return fragments.join(': ');
};
