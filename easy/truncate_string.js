/** 3,004,520 ops/s on perf.link */
const truncateString = (str, num) => {
    if (num <= 0) return ''
    if (num === str.length) return str 
    return str.substring(0, num) + '...'
}
  
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8) === 'A-tisket...')
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11) === 'Peter Piper...')
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 20) === 'Peter Piper picked a...')
console.log(truncateString('hello', -1) === '')
console.log(truncateString('hello', 5) === 'hello')