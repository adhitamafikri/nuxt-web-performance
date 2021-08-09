<template>
  <div class="c-product-card border rounded-md shadow-md">
    <div class="c-product-card__img flex justify-center items-center">
      <img :src="product.img" :alt="product.name" />
    </div>
    <div class="c-product-card__details p-2">
      <p class="c-product-card__details__name text-sm break-words">
        {{ product.name }}
      </p>
      <p class="c-product-card__details__price text-sm font-bold mb-2">
        {{ product.price }}
      </p>
      <div class="c-store">
        <div class="c-store__slide">
          <p class="text-xs">{{ product.store.location }}</p>
          <p class="text-xs">{{ product.store.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.c-product-card {
  $pc-w: 180px;
  $pc-h: 280px;
  background: white;
  width: $pc-w;
  height: $pc-h;
  cursor: pointer;

  &__img {
    width: 100%;
    height: calc(#{$pc-h} / 2);
    overflow: hidden;
    img {
      width: auto;
      height: 100%;
      object-fit: fill;
    }
  }

  &__details {
    width: 100%;
    height: calc(#{$pc-h} / 2);

    &__name {
      height: 40px;
    }
  }
}
</style>
