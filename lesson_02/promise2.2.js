const promise = new Promise((resolve, reject) => {
  console.log(1) // 1.  1
  setTimeout(() => {
    console.log('timerStart') // 4. timerStart
    resolve('success')
    console.log('timerEnd') // 5.  timerEnd
  }, 0)
  console.log(2) // 2.  2
})
promise.then((res) => {
  console.log(res) // 6.  success
})
console.log(4) // 3.  4

// 1
// 2
// 4
// timerStart
// timerEnd
// success

// 从上至下，先遇到new Promise，执行该构造函数中的代码1
// 然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行
// 执行同步代码2
// 跳出promise函数，遇到promise.then，但其状态还是为pending，这里理解为先不执行
// 执行同步代码4
// 一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它
// 首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列
// 继续执行同步代码timerEnd
// 宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它。
