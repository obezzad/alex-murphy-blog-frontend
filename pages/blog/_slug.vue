<template>
  <Article :id="this.slug" />
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = await params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
}
</script>