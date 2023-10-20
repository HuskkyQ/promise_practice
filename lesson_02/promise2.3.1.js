setTimeout(() => {
  console.log('timer1') // 2.  timer1
  setTimeout(() => {
    console.log('timer3') // 4.  timer3
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timer2') // 3.  timer2
}, 0)
console.log('start') // 1.  start

// start
// timer1
// timer2
// timer3
