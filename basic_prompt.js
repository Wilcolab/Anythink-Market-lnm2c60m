function camelCase_converter(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]+/g, '') // Remove non-alphanumeric except spaces
        .split(' ')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}