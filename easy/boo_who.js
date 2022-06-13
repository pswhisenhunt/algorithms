/** 
 * Check if a value is classified as a boolean primitive. Return true or false. 
 * Boolean primitives are true and false.
*/

const booWho = (bool) => {
    return typeof bool === 'boolean'
}

console.log(booWho(true))
console.log(booWho(false))
console.log(booWho("true"))
console.log(booWho({true: true}))
console.log(booWho([true, false]))
console.log(booWho(undefined))