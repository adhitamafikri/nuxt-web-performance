import productsMock from '@/_mocks/products'

function getProduct(productId = 0) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      await setTimeout(() => {
        const result = productsMock.filter(
          (x) => x.id === parseInt(productId, 10)
        )[0]
        resolve(result)
      }, 1000)
    } catch (error) {
      reject(error)
    }
  })
}

export { getProduct }
