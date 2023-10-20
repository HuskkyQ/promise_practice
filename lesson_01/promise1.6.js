const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1) // 2.  1
    resolve('success')
  })
console.log('start') // 1.  start
fn().then((res) => {
  console.log(res) // 3.  success
})

// start
// 1
// success
