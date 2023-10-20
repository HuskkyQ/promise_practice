const promise1 = new Promise((resolve, reject) => {
  console.log('promise1') // 1. promise1
})
console.log('1', promise1) // 2. 1 Promise { <pending> }

// promise1
// 1 Promise { <pending> }

/**
 * 过程分析
 *
 * 从上至下，先遇到new Promise，执行该构造函数中的代码promise1
 * 然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending
 */
