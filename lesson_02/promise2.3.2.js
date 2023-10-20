setTimeout(() => {
  console.log('timer1') // 2.  timer1
  Promise.resolve().then(() => {
    console.log('promise') // 3.  promise
  })
}, 0)
setTimeout(() => {
  console.log('timer2') // 4.  timer2
}, 0)
console.log('start') // 1. start

// start
// timer1
// promise
// timer2
