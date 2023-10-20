async function async1() {
  try {
    await Promise.reject('error!!!')
  } catch (e) {
    console.log(e) // 2. error
  }
  console.log('async1') // 3
  return Promise.resolve('async1 success')
}
async1().then((res) => console.log(res)) // 4
console.log('script start') // 1

// script start
// error!!!
// async1
// async1 success
