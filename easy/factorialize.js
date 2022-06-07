const { assertEquals } = require('../assertEquals')

/** Version 1 */
const factorializeV1 = (num) => {
   if (num === 0) {
       return 1;
   }
   return num * factorializeV1(num-1)
}

console.log(assertEquals(factorializeV1, 5, 120))

/** Version 2 */
const factorializeV2 = (num) => {
    if (num === 0) {
        return 1;
    }
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(assertEquals(factorializeV2, 5, 120))