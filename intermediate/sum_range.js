/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers 
 * plus the sum of all the numbers between them. The lowest number will not always come first. 
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 
 * (both inclusive) is 10.
 */

const sumRange = (arr) => {
    let start = Math.min(...arr);
    let end = Math.max(...arr);
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumRange([4,1])) // 10 
console.log(sumRange([5, 10])) // 45
console.log(sumRange([15, 10])) // 75