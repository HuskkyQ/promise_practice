async function async1() {
  console.log('async1 start') // 1. async1 start
  await async2()
  console.log('async1 end') // 4. async1 end
}
async function async2() {
  console.log('async2') // 2. async2
}
async1()
console.log('start') // 3. start

// async1 start
// async2
// start
// async1 end

/* 
async function async1() {
  console.log('async1 start')
  // 原来代码
  // await async2();
  // console.log("async1 end");

  // 转换后代码
  new Promise((resolve) => {
    console.log('async2')
    resolve()
  }).then((res) => console.log('async1 end'))
}
async function async2() {
  console.log('async2')
}
async1()
console.log('start')
*/

/*
async function async1() {
  console.log('async1 start') // 1
  new Promise((resolve) => {
    console.log('promise') // 2
  })
  console.log('async1 end') // 3
}
async1()
console.log('start') // 4
*/
