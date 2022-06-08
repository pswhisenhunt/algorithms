const { assertEquals } = require('../assertEquals')

/** 1,456,950 ops/s on perf.link  */
const findLongestWordLength = (str) => {
    let wordArr = str.split(' ')
    let longestWordLength = wordArr[0].length
    wordArr.forEach((word) => {
        if (word.length > longestWordLength) longestWordLength = word.length
    })
    return longestWordLength
}

console.log(assertEquals(findLongestWordLength, 'The quick brown fox jumped over the lazy dog', 6))
console.log(assertEquals(findLongestWordLength, 'Lazy Crazy Hazy Summer Dayssss!', 8))
console.log(assertEquals(findLongestWordLength, 'Hello Hello', 5))