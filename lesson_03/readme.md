1. Promise 的状态一经改变就不能再改变。(见 3.1)
2. .then 和.catch 都会返回一个新的 Promise。(上面的 👆1.4 证明了)
3. catch 不管被连接到哪里，都能捕获上层未捕捉过的错误。(见 3.2)
4. 在 Promise 中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如 return 2 会被包装为 return Promise.resolve(2)。
5. Promise 的 .then 或者 .catch 可以被调用多次, 但如果 Promise 内部的状态一经改变，并且有了一个值，那么后续每次调用.then 或者.catch 的时候都会直接拿到该值。(见 3.5)
6. .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。(见 3.6)
7. .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。(见 3.7)
8. .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。(见 3.8)
9. .then 方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为 catch 是.then 第二个参数的简便写法。(见 3.9)
10. .finally 方法也是返回一个 Promise，他在 Promise 结束的时候，无论结果为 resolved 还是 rejected，都会执行里面的回调函数。
