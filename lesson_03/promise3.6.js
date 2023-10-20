Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res) // 1. then: Error
  })
  .catch((err) => {
    console.log('catch: ', err)
  })

// 这也验证了第4点和第6点，返回任意一个非 promise 的值都会被包裹成 promise 对象，
// 因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))。
