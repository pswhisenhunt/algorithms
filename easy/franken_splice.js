/**
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */

// 868,470 ops/s 
const frankenSliceV1 = (arr1, arr2, n) => {
    if (!arr2.length) return arr1
    let before = arr2.slice(0, n);
    let after = arr2.slice(n)
    return before.concat(arr1).concat(after);
}

console.log(frankenSliceV1([1, 2, 3], [4, 5, 6, 7], 1)) // [4, 1, 2, 3, 5, 6, 7]
console.log(frankenSliceV1([1, 2], ["a", "b"], 1)) // ["a", 1, 2, "b"]
console.log(frankenSliceV1([1, 2, 3, 4], [], 0)) // [1, 2, 3, 4]
console.log(frankenSliceV1(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) 
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]



// 771,040 ops/s
const frankinSliceV2 = (arr1, arr2, n) => {
    return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)]
}

console.log(frankenSliceV2([1, 2, 3], [4, 5, 6, 7], 1)) // [4, 1, 2, 3, 5, 6, 7]
console.log(frankenSliceV2([1, 2], ["a", "b"], 1)) // ["a", 1, 2, "b"]
console.log(frankenSliceV2([1, 2, 3, 4], [], 0)) // [1, 2, 3, 4]
console.log(frankenSliceV2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) 
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]