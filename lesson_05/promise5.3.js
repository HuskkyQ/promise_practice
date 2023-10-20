async function async1() {
  console.log('async1 start') // 1. async1 start
  await async2()
  console.log('async1 end') // 4. async1 end
  setTimeout(() => {
    console.log('timer1') // 7. timer1
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2') // 5. timer2
  }, 0)
  console.log('async2') // 2. async2
}

async1()
setTimeout(() => {
  console.log('timer3') // 6. timer3
}, 0)
console.log('start') // 3. start

// async1 start
// async2
// start
// async1 end
// timer2
// timer3
// timer1
