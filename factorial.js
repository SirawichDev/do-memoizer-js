let memoized=  require('./memoizeUtils')

const factorials = memoized((x) => {
    if (x === 0) {
        return 1
    } else {
        return x * factorials(x - 1)
    }
})

console.time("time0")
console.log(factorials(10))
console.timeEnd("time0")

console.time("time1")
console.log(factorials(11))
console.timeEnd("time1")


console.time("time2")
console.log(factorials(12))
console.timeEnd("time2")



