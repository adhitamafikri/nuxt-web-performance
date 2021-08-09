<template>
  <section id="homepage">
    <!-- <NuxtLogo /> -->
    <h1 class="text-2xl text-center">Welcome to Our Nuxt Store</h1>
    <p class="text-center mt-4">
      This is a website where I learn about SEO and how to leverage NuxtJS's SSR
      to achieve a better SEO
    </p>

    <h2 class="text-xl text-center mt-8">Our Top Products</h2>
    <div class="w-100 flex justify-center space-x-8 mt-4">
      <template v-for="product in products">
        <nuxt-link :key="`prd-${product.id}`" :to="`/details/${product.id}`">
          <component :is="'ProductCard'" :product="product" />
        </nuxt-link>
      </template>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    ProductCard: () =>
      import(/* product-card */ '@/components/ProductCard.vue'),
  },
  head() {
    const SEO_CONTENTS = {
      description:
        "This is a website where I learn about SEO and how to leverage NuxtJS's SSR to achieve a better SEO",
    }

    return {
      title: 'The Nuxty Store - Learn Nuxt and Seo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: SEO_CONTENTS.description,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
}
</script>
