Promise.resolve('1')
  .finally(() => {
    console.log('finally1') // 1.  finally1
    // throw new Error('我是finally中抛出的异常') // 2. 捕获错误  Error: 我是finally中抛出的异常
    return new Error('我是finally中抛出的异常') // 2. finally后面的then函数 1
  })
  .then((res) => {
    console.log('finally后面的then函数', res)
  })
  .catch((err) => {
    console.log('捕获错误', err)
  })
