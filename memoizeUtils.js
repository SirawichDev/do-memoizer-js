module.exports = memoized = (fn) => {
    let cache =  {}
    return (...args) => {
        let n = args[0]
        if(n in cache) {
            console.log('From cache: ', n)
            return cache[n]
        }
        else {
            console.log('Calculating result',n)
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}