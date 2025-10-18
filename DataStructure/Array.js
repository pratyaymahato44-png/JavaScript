const arr1=[1,2,3,4,5]

const arr2=new Array(1,6,9,8)
// console.log(arr2[2])

// arr2.push(4)
// arr2.push(2)
// arr2.pop()

//arr2.unshift(5)
// arr2.shift()

// console.log(arr2.includes(4))
// console.log(arr2.indexOf(7))

// const newArr= arr2.join()
// console.log(arr2)
// console.log(newArr)

//slice,splice

console.log("A ",arr1)
const n1=arr1.slice(1,3)
console.log("B ",n1)
console.log("A ",arr1)
const n2=arr1.splice(1,3)
console.log("C ",n2)
console.log("A ",arr1)