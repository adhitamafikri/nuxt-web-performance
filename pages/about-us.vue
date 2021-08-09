<template>
  <section id="about-us">
    <h1 class="text-2xl text-center">About Us</h1>
    <p class="text-center mt-8">This is a website for me to learn about SEO</p>
  </section>
</template>

<script>
export default {
  head() {
    const metaDescription = `The Nuxty Store - About Us`
    return {
      title: `The Nuxty Store - About Us`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription,
        },
      ],
    }
  }
}
</script>
