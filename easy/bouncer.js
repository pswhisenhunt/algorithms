/** 
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

// 1,236,830 ops/s
const bouncerV1 = (arr) => {
    return arr.filter((item) => item)
}

console.log(bouncerV1([7, "ate", "", false, 9])) // [7, 'ate', 9]
console.log(bouncerV1([false, null, 0, NaN, undefined, ""])) // []
console.log(bouncerV1(["a", "b", "c"])) // ['a', 'b', 'c']
console.log(bouncerV1([null, NaN, 1, 2, undefined])) // [1,2]


// 1,014,610 ops/s
const bouncerV2 = (arr) => {
    let truthyArr = []
    arr.forEach((item) => {
        if (item) {
            truthyArr.push(item)
        }
    })
    return truthyArr
}

console.log(bouncerV2([7, "ate", "", false, 9])) // [7, 'ate', 9]
console.log(bouncerV2([false, null, 0, NaN, undefined, ""])) // []
console.log(bouncerV2(["a", "b", "c"])) // ['a', 'b', 'c']
console.log(bouncerV2([null, NaN, 1, 2, undefined])) // [1,2]