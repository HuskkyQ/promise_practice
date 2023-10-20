// 使用Promise实现每隔1秒输出1,2,3

const arr = [1, 2, 3]

// arr.reduce((prev, current) => {
//   return prev.then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(console.log(current))
//       }, 1000)
//     })
//   })
// }, Promise.resolve())
