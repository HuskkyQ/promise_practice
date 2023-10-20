async function async1() {
  await async2()
  console.log('async1')
  return 'async1 success'
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2') // 1.
    reject('error') // 如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。
    // 如果改为throw new Error也是一样的：
  })
}
async1().then((res) => console.log(res))

// async2
// error: error

/* 
async function async1 () {
  console.log('async1');
  throw new Error('error!!!')
  return 'async1 success'
}
async1().then(res => console.log(res))
*/
