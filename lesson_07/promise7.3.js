const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3')
    console.log(3, 'timer1') // 3. timer1
  }, 0)
  resolve('resovle1')
  resolve('resolve2')
})
  .then((res) => {
    console.log(1, res) // 1. resolve1
    setTimeout(() => {
      console.log(4, p1) // 4. resolved
    }, 1000)
  })
  .finally((res) => {
    console.log(2, 'finally', res) // 2. undefined
  })

// 1 resovle1
// 2 finally undefined
// 3 timer1
// 4 Promise { <resolved> }
