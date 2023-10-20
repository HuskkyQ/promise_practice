Promise.resolve().then(() => {
  console.log('promise1') // 2.  promise1
  const timer2 = setTimeout(() => {
    console.log('timer2') // 5.  timer2
  }, 0)
})
const timer1 = setTimeout(() => {
  console.log('timer1') // 3.  timer1
  Promise.resolve().then(() => {
    console.log('promise2') // 4.  promise2
  })
}, 0)
console.log('start') // 1.  start

// start
// promise1
// timer1
// promise2
// timer2

// 刚开始整个脚本作为第一次宏任务来执行，我们将它标记为宏1，从上至下执行
// 遇到Promise.resolve().then这个微任务，将then中的内容加入第一次的微任务队列标记为微1
// 遇到定时器timer1，将它加入下一次宏任务的延迟列表，标记为宏2，等待执行(先不管里面是什么内容)
// 执行宏1中的同步代码start
// 第一次宏任务(宏1)执行完毕，检查第一次的微任务队列(微1)，发现有一个promise.then这个微任务需要执行
// 执行打印出微1中同步代码promise1，然后发现定时器timer2，将它加入宏2的后面，标记为宏3
// 第一次微任务队列(微1)执行完毕，执行第二次宏任务(宏2)，首先执行同步代码timer1
// 然后遇到了promise2这个微任务，将它加入此次循环的微任务队列，标记为微2
// 宏2中没有同步代码可执行了，查找本次循环的微任务队列(微2)，发现了promise2，执行它
// 第二轮执行完毕，执行宏3，打印出timer2
