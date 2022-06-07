const { assertEquals } = require('../assertEquals')

/* 12,500 ops/s */
const reverseV1= (str) => {
    let reversedStr = ''
    for (let i = str.length; i >= 0; i--) {
        reversedStr += str.charAt(i)
    }
    return reversedStr
}

/* 34,010 ops/s - it is the better option */
const reverseV2= (str) => {
    return str.split('').reverse().join('');
}

/* version 1 */
console.log('--- version 1 ---')
console.log(assertEquals(reverseV1, 'hello', 'olleh'))
console.log(assertEquals(reverseV1, 'pamela', 'alemap'))
console.log(assertEquals(reverseV1, 'let your light shine', 'enihs thgil ruoy tel'))

/* version 2 */
console.log('--- version 2 ---')
console.log(assertEquals(reverseV2, 'hello', 'olleh'))
console.log(assertEquals(reverseV2, 'pamela', 'alemap'))
console.log(assertEquals(reverseV2, 'let your light shine', 'enihs thgil ruoy tel'))