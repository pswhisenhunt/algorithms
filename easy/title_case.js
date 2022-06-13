/**
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */

// 494,330 ops/s 
const titleCase = (str) => {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase()
    }).join(' ')
}

console.log(titleCase("I'm a little tea pot")) // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")) // Short and Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) // "Here Is My Handle Here Is My Spout"