<template>
  <!-- <Tutorial /> -->
  <div class="main">
   <hero-main />
   <Quote quote="With great power comes great electricity bill" cite="Dr. Who" />

   <section-header title="projects" :viewBtn="true" />

   <div class="px-4 container mx-auto my-20">
    <div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
      <blog-card v-for="i in 6" :key="i"></blog-card>
    </div>
   </div>

   <section-header title="skills" />
   <div class="grid container px-4 lg:grid-cols-3 items-start gap-4">
    <div class="bg hidden md:flex relative bg-slate-50">jhfkhkdfhkusfbkusdbkbk</div>
    <div class="skills  col-span-2 grid grid-rows-3 grid-cols-3 gap-4 ">
      <Skill v-for="i in 6" :key="i" :title="'languages'+i" :skills="['typeScript','Lua','JavaScript','Python','C#']" />
    </div>
   </div>


   <section-header title="about-me" />
   <about-me />

   <section-header title="contacts" />
   <div class="mb-4 container px-4">
    <Contact />
   </div>
  </div>
</template>

<script>
import AboutMe from '~/components/about-me.vue'
import sectionHeader from '~/components/section-header.vue'
export default {
	components: { sectionHeader, AboutMe },
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
