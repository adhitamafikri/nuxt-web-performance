<template>
  <div class="c-header flex items-center space-x-4 px-8">
    <nuxt-link to="/">
      <div class="c-logo">
        <img src="/icon.png" alt="logo" />
      </div>
    </nuxt-link>
    <p class="font-bold">The Nuxt Store</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.c-header {
  background: $Fashion-4-hex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
}

.c-logo {
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
  }
}
</style>
