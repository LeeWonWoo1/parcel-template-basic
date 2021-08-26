console.log('Hello Parcel!')
console.log('test')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()