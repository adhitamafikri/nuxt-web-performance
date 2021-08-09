<template>
  <div id="app-container">
    <component :is="'Header'" />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import(/* app-header */ '@/components/Header.vue'),
  },
}
</script>

<style lang="scss" scoped>
#app-container {
  padding: 16px;
  padding-top: calc(80px + 16px); // header height + extra padding
}
</style>

<style lang="scss">
body {
  background: $Fashion-3-hex;
}
</style>
