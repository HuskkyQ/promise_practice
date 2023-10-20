async function async1() {
  console.log('async1 start') // 1. async1 start
  await async2()
  console.log('async1 end') // 4. async1 end
}
async function async2() {
  setTimeout(() => {
    console.log('timer') // 5. timer
  }, 0)
  console.log('async2') // 2. async2
}

async1()
console.log('start') // 3. start

// async1 start
// async2
// start
// async1 end
// timer
