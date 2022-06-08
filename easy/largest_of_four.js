const { assertEquals } = require('../assertEquals')

/** 
 * Description: 
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays 
* */

/** Version 1 
 * 268,780 ops/s on perf.link
 */
const largestOfFourV1 = (arr) => {
    let maxValuesArr = [];
    for (let i = 0; i < arr.length; i++) {
        let maxVal = arr[i][0]
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maxVal) {
                maxVal = arr[i][j]
            }
        }
        maxValuesArr.push(maxVal)
    }
    return maxValuesArr;
}

console.log(assertEquals(largestOfFourV1, [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], [5, 27, 39, 1001]))
console.log(assertEquals(largestOfFourV1, [[4, 7, 2, 13], [-1, 0, 0, 0], [-2, -1, 0, 1], [100, 201, 105, 201]], [13, 0, 1, 201]))

/** Version 2 
 * 1,192,750 ops/s on perf.link - way better performance! 
 */
const largestOfFourV2 = (arr) => {
    return arr.map((subArr) => {
        return Math.max(...subArr)
    })
}

console.log(assertEquals(largestOfFourV2, [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], [5, 27, 39, 1001]))
console.log(assertEquals(largestOfFourV2, [[4, 7, 2, 13], [-1, 0, 0, 0], [-2, -1, 0, 1], [100, 201, 105, 201]], [13, 0, 1, 201]))