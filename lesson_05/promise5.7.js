async function async1() {
  console.log('async1 start') // 2. async1 start
  await new Promise((resolve) => {
    console.log('promise1') // 3. promise1
    resolve('promise resolve')
  })
  console.log('async1 success') // 5. async1 success
  return 'async1 end'
}

console.log('srcipt start') // 1. srcipt start

async1().then((res) => {
  console.log(res) // 6. async1 end
})

new Promise((resolve) => {
  console.log('promise2') // 4. promise2
  setTimeout(() => {
    console.log('timer') // 7. timer
  })
})

// srcipt start
// async1 start
// promise1
// promise2
// async1 success
// async1 end
// timer
