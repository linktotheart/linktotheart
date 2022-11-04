<template>
  <!-- <Tutorial /> -->
  <div class="">
   <hero-main></hero-main>
   <Quote quote="With great power comes great electricity bill" cite="Dr. Who" />

   <section-header title="Projects"></section-header>

   <div class=" container mx-auto my-20">

    <div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
      <blog-card v-for="i in 6" :key="i"></blog-card>
    </div>
   </div>
  </div>
</template>

<script>
import sectionHeader from '~/components/section-header.vue'
export default {
	components: { sectionHeader },
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.fetchAllBlogPosts()
  },
  methods: {
    async fetchAllBlogPosts() {
      const token = process.env.AUTH_TOKEN
      const {data} = await this.$axios.$get(`/v1/cdn/stories?starts_with=posts/`+`&token=`+token)
      this.posts = data.stories
    }
  }
}
</script>
