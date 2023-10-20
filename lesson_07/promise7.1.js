const first = () =>
  new Promise((resolve, reject) => {
    console.log(3) // 1. 3
    let p = new Promise((resolve, reject) => {
      console.log(7) // 2. 7
      setTimeout(() => {
        console.log(5) // 6.  5
        resolve(6)
        console.log(p) // 7. pending...
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then((arg) => {
      console.log(arg) // 4.  1
    })
  })

first().then((arg) => {
  console.log(arg) // 5.  2
})
console.log(4) // 3. 4
