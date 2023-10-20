const async1 = async () => {
  console.log('async1', 2) // 2. async1
  setTimeout(() => {
    console.log('timer1', 6) // 6. timer1
  }, 2000)
  await new Promise((resolve) => {
    console.log('promise1', 3) // 3. promise1
    // async函数中await的new Promise要是没有返回值的话则不执行后面的内容(类似题5.5)
  })
  console.log('async1 end', 5)
  return 'async1 success'
}
console.log('script start', 1) // 1. script start
async1().then((res) => console.log(res, 7))
console.log('script end', 4) // 4.  script end
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then((res) => console.log(res, 5))
// .then函数中的参数期待的是函数，如果不是函数的话会发生透传(类似题3.8 )

setTimeout(() => {
  console.log('timer2', 7) // 7. timer2
}, 1000)

// script start 1
// async1 2
// promise1 3
// script end 4
// 1 5
// timer2 7
// timer1 6
