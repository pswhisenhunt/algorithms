/** 
 * Write a function that splits an array (first argument) into groups the length of size 
 * (second argument) and returns them as a two-dimensional array.
 */

const chunkArrayIntoGroups = (arr, size) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

console.log(chunkArrayIntoGroups(["a", "b", "c", "d"], 2))// [["a", "b"], ["c", "d"]]
console.log(chunkArrayIntoGroups([0, 1, 2, 3, 4, 5], 3)) // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayIntoGroups([0, 1, 2, 3, 4, 5], 2)) // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayIntoGroups([0, 1, 2, 3, 4, 5], 4))// [[0, 1, 2, 3], [4, 5]]

