/** 
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

// 1,236,830 ops/s
const bouncer = (arr) => {
    return arr.filter((item) => item)
}

console.log(bouncer([7, "ate", "", false, 9])) // [7, 'ate', 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // []
console.log(bouncer(["a", "b", "c"])) // ['a', 'b', 'c']
console.log(bouncer([null, NaN, 1, 2, undefined])) // [1,2]