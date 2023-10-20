Promise.reject('err!!!')
  .then(
    (res) => {
      console.log('success', res)
    },
    (err) => {
      console.log('error', err) // 1. error  err!!!
    }
  )
  .catch((err) => {
    console.log('catch', err)
  })

// 它进入的是then()中的第二个参数里面，而如果把第二个参数去掉，就进入了catch()中

Promise.reject('error!!!')
  .then((res) => {
    console.log('success', res)
  })
  .catch((err) => {
    console.log('catch', err) // 1. catch  error!!!
  })

// 它进入的是then()中的第二个参数里面，而如果把第二个参数去掉，就进入了catch()中：

Promise.resolve()
  .then(
    function success(res) {
      throw new Error('error!!!')
    },
    function fail1(err) {
      console.log('fail1', err)
    }
  )
  .catch(function fail2(err) {
    console.log('fail2', err) // 1
  })

// 由于Promise调用的是resolve()，因此.then()执行的应该是success()函数，
// 可是success()函数抛出的是一个错误，它会被后面的catch()给捕获到，而不是被fail1函数捕获。
