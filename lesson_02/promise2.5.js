const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
    console.log('timer1') // 4. timer1
  }, 1000)
  console.log('promise1里的内容') // 1. promise1里的内容
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!') // 5.
})
console.log('promise1', promise1) // 2.
console.log('promise2', promise2) // 3.
setTimeout(() => {
  console.log('timer2') // 6.
  console.log('promise1', promise1) // 7.
  console.log('promise2', promise2) // 8.
}, 2000)

// promise1里的内容
// promise1 Promise { <pending> }
// promise2 Promise { <pending> }
// timer1

// 4 |     console.log('timer1') // 4. timer1
// 5 |   }, 1000)
// 6 |   console.log('promise1里的内容') // 1. promise1里的内容
// 7 | })
// 8 | const promise2 = promise1.then(() => {
// 9 |   throw new Error('error!!!') // 5.
//             ^
// error: error!!!

// timer2
// promise1 Promise { <resolved> }
// promise2 Promise { <rejected> }
