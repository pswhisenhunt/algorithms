/** V1 - 1,976,390 ops/s on perf.link */
const findElementV1 = (arr, func) => {
    return arr.filter(func)[0] || undefined
}

console.log('version 1')
console.log(findElementV1([1, 2, 3, 4], num => num % 2 === 0) === 2) 
console.log(findElementV1([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) === 8)
console.log(findElementV1([1, 3, 5, 9], function(num) { return num % 2 === 0; }) === undefined)

/** V2 - 796,250 ops/s on perf.link */
const findElementV2 = (arr, func) => {
   for (let i = 0; i < arr.length; i++) {
       if (func(arr[i])) return arr[i]
   }
   // functions without a specified return values automatically return undefined, but I included this for clarity
   return undefined
}

console.log('version 2')
console.log(findElementV2([1, 2, 3, 4], num => num % 2 === 0) === 2) 
console.log(findElementV2([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) === 8)
console.log(findElementV2([1, 3, 5, 9], function(num) { return num % 2 === 0; }) === undefined)
