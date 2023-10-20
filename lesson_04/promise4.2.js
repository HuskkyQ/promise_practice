function runAsync(x) {
  const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject(x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err)) // .catch()函数能够捕获到.all()里最先的那个异常，并且只执行一次。

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)]).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
