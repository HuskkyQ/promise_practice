const promise = new Promise((resolve, reject) => {
  console.log(1) // 1.  1
  console.log(2) // 2.  2
})
promise.then(() => {
  console.log(3)
})
console.log(4) // 3.  4

// 1
// 2
// 4

// 和题目二相似，只不过在promise中并没有resolve或者reject
// 因此promise.then并不会执行，它只有在被改变了状态之后才会执行。
