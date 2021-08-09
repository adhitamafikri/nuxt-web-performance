import productsMock from '@/_mocks/products'

export default () => ({
  products: [...productsMock],
  selectedProduct: null,
})
