const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!') // 3. error
})
console.log('promise1', promise1) // 1.  promise1  Promise {<pending>}
console.log('promise2', promise2) // 2.  promise2  Promise {<pending>}
setTimeout(() => {
  console.log('promise1', promise1) // 4.
  console.log('promise2', promise2) // 5.
}, 2000)

// promise1 Promise { <pending> }
// promise2 Promise { <pending> }
// 2 |   setTimeout(() => {
// 3 |     resolve('success')
// 4 |   }, 1000)
// 5 | })
// 6 | const promise2 = promise1.then(() => {
// 7 |   throw new Error('error!!!') // 3. error
//             ^
// error: error!!!
// promise1 Promise { <resolved> }
// promise2 Promise { <rejected> }
