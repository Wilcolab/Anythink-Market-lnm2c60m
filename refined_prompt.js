/**
 * Converts a given string to camelCase format.
 *
 * This function removes all non-alphanumeric characters (except spaces),
 * splits the string into words, lowercases the first word, and capitalizes
 * the first letter of each subsequent word, then joins them together.
 *
 * Examples:
 *   camelCaseConverter('Hello world!')        // 'helloWorld'
 *   camelCaseConverter('foo_bar-baz')         // 'fooBarBaz'
 *   camelCaseConverter('  multiple   spaces ')// 'multipleSpaces'
 *
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string. Returns an empty string if input has no valid words.
 * @throws {Error} Throws an error if the input is not a string.
 */
function camelCaseConverter(input) {
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string but received ${typeof input}`);
    }

    // Remove all non-alphanumeric characters except spaces
    const cleaned = input.replace(/[^a-zA-Z0-9 ]+/g, ' ');

    // Split by spaces, filter out empty strings
    const words = cleaned.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    const camelCased = words
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');

    return camelCased;
}

// Examples:
console.log(camelCaseConverter("example text"));      // "exampleText"
console.log(camelCaseConverter("Hello, world!"));     // "helloWorld"
function dotCaseConverter(input) {
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string but received ${typeof input}`);
    }

    // Remove all non-alphanumeric characters except spaces
    const cleaned = input.replace(/[^a-zA-Z0-9 ]+/g, ' ');

    // Split by spaces, filter out empty strings, lowercase all words
    const words = cleaned.trim().split(/\s+/).filter(Boolean).map(word => word.toLowerCase());

    return words.join('.');
}

// Examples:
console.log(dotCaseConverter("example text"));      // "example.text"
console.log(dotCaseConverter("Hello, world!"));     // "hello.world"

try {
    console.log(camelCaseConverter(25));
} catch (e) {
    console.error(e.message); // "Invalid input: expected a string but received number"
}