function toKebabCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Input must be a non-null, non-undefined string');
    }

    // Remove punctuation (keep letters, numbers, and spaces)
    let cleaned = input.replace(/[^\w\s]|_/g, '');

    // Replace multiple spaces/tabs/newlines with a single space
    cleaned = cleaned.replace(/\s+/g, ' ');

    // Trim leading/trailing spaces
    cleaned = cleaned.trim();

    // Convert to lowercase and replace spaces with hyphens
    return cleaned
        .toLowerCase()
        .split(' ')
        .filter(Boolean)
        .join('-');
}

// Example usage:
// console.log(toKebabCase("Hello,   World!  This is a test.")); // "hello-world-this-is-a-test"