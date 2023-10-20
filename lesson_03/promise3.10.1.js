// 接着来看看.finally()，这个功能一般不太用在面试中，不过如果碰到了你也应该知道该如何处理。
// 其实你只要记住它三个很重要的知识点就可以了：

// .finally()方法不管Promise对象最后的状态如何都会执行
// .finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。

Promise.resolve('1')
  .then((res) => {
    console.log(res) // 1.  1
  })
  .finally(() => {
    console.log('finally') // 3. finally
  })

Promise.resolve('2')
  .finally(() => {
    console.log('finally2') // 2. finally2
    return '我是finally2返回的值'
  })
  .then((res) => {
    console.log('finally2后面的then函数', res) // 4.  finally2后面的then函数  2
  })

// 这两个Promise的.finally都会执行，且就算finally2返回了新的值，
// 它后面的then()函数接收到的结果却还是'2'，因此打印结果为：
