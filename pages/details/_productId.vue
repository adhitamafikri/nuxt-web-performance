<template>
  <section id="product-detail">
    <component :is="'ProductCard'" :product="product" />
  </section>
</template>

<script>
import { getProduct as apiGetProduct } from '@/services/api'

export default {
  name: 'ProductDetailsPage',
  components: {
    ProductCard: () =>
      import(/* product-card */ '@/components/ProductCard.vue'),
  },
  async asyncData({ params }) {
    const { productId } = params
    const product = await apiGetProduct(productId)
    return { product }
  },
  head() {
    const { name } = this.product
    const metaDescription = `The Nuxty Store! Get ${name} With the Best Price`
    return {
      title: `The Nuxty Store - Get ${name} With the Best Price`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription,
        },
      ],
    }
  },
}
</script>
