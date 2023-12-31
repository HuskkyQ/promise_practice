console.log('start') // 1.  start
setTimeout(() => {
  console.log('time') // 4.  time
})
Promise.resolve().then(() => {
  console.log('resolve') // 3.  resolve
})
console.log('end') // 2.  end

// start
// end
// resolve
// time

// 刚开始整个脚本作为一个宏任务来执行，对于同步代码直接压入执行栈进行执行，因此先打印出start和end。
// setTimout作为一个宏任务被放入宏任务队列(下一个)
// Promise.then作为一个微任务被放入微任务队列
// 本次宏任务执行完，检查微任务，发现Promise.then，执行它
// 接下来进入下一个宏任务，发现setTimeout，执行。
