/** 
 * 2,717,440 ops/s on perf.link 
 **/
const repeat = (str, repitions) => {
    let repeatedStr = ''
    for (let i = 0; i < repitions; i++) {
        repeatedStr += str
    }
    return repeatedStr
}

console.log(repeat("*", 3) === '***')
console.log(repeat('abc', 4) === 'abcabcabcabc')
console.log(repeat('abc', -2) === '')