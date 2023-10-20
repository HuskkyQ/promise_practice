const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1) // 1.  1
    resolve('success')
  })
fn().then((res) => {
  console.log(res) // 3. success
})
console.log('start') // 2.  start

// 1
// start
// success
