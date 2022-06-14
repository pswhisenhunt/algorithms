module.exports = {
    assertEquals: (func, givenVal, expectedVal) => {
        return func(givenVal).toString() === expectedVal.toString()
    }
}