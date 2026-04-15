/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = new Set();

    for (let char of s) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }
};