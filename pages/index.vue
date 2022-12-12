<template>
  <!-- <Tutorial /> -->
  <div class="main">
    <hero-main />
    <Quote quote="With great power comes great electricity bill" cite="Dr. Who" />

    <section-header title="projects" :viewBtn="true" />

    <div class="px-4 container mx-auto my-20">
      <div class="grid lg:grid-cols-3 md:grid-cols-2  gap-4 lg:gap-8">
        <blog-card v-for="i in 6" :key="i"></blog-card>
      </div>
    </div>

    <section-header title="skills" />
    <div class="grid container px-4 lg:grid-cols-3 items-start gap-4">
      <!-- <div class="bg hidden md:flex relative bg-slate-50">jhfkhkdfhkusfbkusdbkbk</div> -->
      <div class="relative self-stretch">
        <div class="dot animate-ping absolute text-primary top-0 right-4">
          <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
            <circle cx="22" cy="2" r="2" fill="currentColor" />
            <circle cx="42" cy="2" r="2" fill="currentColor" />
            <circle cx="62" cy="2" r="2" fill="currentColor" />
            <circle cx="82" cy="2" r="2" fill="currentColor" />
            <circle cx="2" cy="22" r="2" fill="currentColor" />
            <circle cx="22" cy="22" r="2" fill="currentColor" />
            <circle cx="42" cy="22" r="2" fill="currentColor" />
            <circle cx="62" cy="22" r="2" fill="currentColor" />
            <circle cx="82" cy="22" r="2" fill="currentColor" />
            <circle cx="2" cy="42" r="2" fill="currentColor" />
            <circle cx="22" cy="42" r="2" fill="currentColor" />
            <circle cx="42" cy="42" r="2" fill="currentColor" />
            <circle cx="62" cy="42" r="2" fill="currentColor" />
            <circle cx="82" cy="42" r="2" fill="currentColor" />
            <circle cx="2" cy="62" r="2" fill="currentColor" />
            <circle cx="22" cy="62" r="2" fill="currentColor" />
            <circle cx="42" cy="62" r="2" fill="currentColor" />
            <circle cx="62" cy="62" r="2" fill="currentColor" />
            <circle cx="82" cy="62" r="2" fill="currentColor" />
            <circle cx="2" cy="82" r="2" fill="currentColor" />
            <circle cx="22" cy="82" r="2" fill="currentColor" />
            <circle cx="42" cy="82" r="2" fill="currentColor" />
            <circle cx="62" cy="82" r="2" fill="currentColor" />
            <circle cx="82" cy="82" r="2" fill="currentColor" />
          </svg>
        </div>
        <div class="bg absolute -z-1 bottom-0  hidden lg:block animate-pulse left-0">
          <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_64_1298" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z" />
            </mask>
            <path
              d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z"
              fill="#C778DD" mask="url(#path-1-inside-1_64_1298)" />
            <mask id="path-3-outside-2_64_1298" maskUnits="userSpaceOnUse" x="76.5" y="0" width="80" height="119"
              fill="black">
              <rect fill="white" x="76.5" width="80" height="119" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z" />
            </mask>
            <path
              d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z"
              fill="#C778DD" mask="url(#path-3-outside-2_64_1298)" />
          </svg>
        </div>
      </div>
      <div class="skills  col-span-2 grid grid-rows-3 grid-cols-3 gap-4 ">
        <Skill v-for="i in 6" :key="i" :title="'languages' + i"
          :skills="['typeScript', 'Lua', 'JavaScript', 'Python', 'C#']" />
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
  async mounted() {
    await this.$store.dispatch('fetchPosts')
    this.posts = this.$store.getters.getPosts || []
  },
  methods: {
    
  }
}
</script>
