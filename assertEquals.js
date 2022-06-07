module.exports = {
    assertEquals: (func, givenVal, expectedVal) => {
        return func(givenVal) === expectedVal
    }
}