/** 
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the
 * purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */

/** 
 * 2,537,320 ops/s on perf.link
 **/
const confirmEnding = (str, target) => {
    return str.substring(str.length - target.length).toLowerCase() === target.toLowerCase()
}

console.log(confirmEnding('Bastian', 'N')) // true
console.log(confirmEnding("Congratulation", "on")) // true
console.log(confirmEnding("He has to give me a new name", "NAME")) // true
console.log(confirmEnding("Connor", "n")) // false
console.log(confirmEnding("Open sesame", "sage")) // false
console.log(confirmEnding("Open sesame", "game")) // false

