async function async1() {
  console.log('async1 start') // 2.
  await new Promise((resolve) => {
    console.log('promise1') // 3.
    resolve('promise1 resolve')
  }).then((res) => console.log(res)) // 5. promise1 resolve
  console.log('async1 success') // 6.
  return 'async1 end'
}

console.log('srcipt start') // 1.
async1().then((res) => console.log(res)) // 7.
console.log('srcipt end') // 4.

// srcipt start
// async1 start
// promise1
// srcipt end
// promise1 resolve
// async1 success
// async1 end
