// How to check if an array is actually an array

const arr = [1, 2, 3, 4, 5]

// Method 1
console.log(Array.isArray(arr))

// Method 2
console.log(arr instanceof Array)

// Method 3
console.log(arr.constructor.toString().indexOf('Array') > -1)