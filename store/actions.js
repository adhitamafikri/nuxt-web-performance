import { getProduct as apiGetProduct } from '@/services/api'

export default {
  getProduct({ commit }, { productId = 0 }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const result = await apiGetProduct(productId)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  },
}
