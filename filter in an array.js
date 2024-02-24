const arr=[1,3,4,5,6,5,9];
arr.filter((item)=>{ console.log(item)})  //func to filter something specific in array only

let result= arr.filter((item)=>{ return item==5})
console.warn(result)
