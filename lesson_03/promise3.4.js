Promise.reject(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    console.log(err) // 1.  1
    return 3
  })
  .then((res) => {
    console.log(res) // 2.  3
  })
