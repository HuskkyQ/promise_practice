Promise.resolve(1)
  .then((res) => {
    console.log(res) // 1. 1
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res) // 2. 2
  })
