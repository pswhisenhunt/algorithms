
const reverse = (str) => {
    let reversedStr = ''
    for (let i = str.length; i >= 0; i--) {
        reversedStr += str.charAt(i)
    }
    return reversedStr
}

const assertTrue = (givenVal, expectedVal) => {
    return reverse(givenVal) === expectedVal
}

console.log(assertTrue('hello', 'olleh'))
console.log(assertTrue('pamela', 'alemap'))
console.log(assertTrue('let your light shine', 'enihs thgil ruoy tel'))