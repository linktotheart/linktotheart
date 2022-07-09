<template>
  <!-- <Tutorial /> -->
  <div class="">
   <hero-main></hero-main>
   <div class=" container mx-auto my-20">
    <h2 class="text-primary mb-8 font-bold text-5xl">Latest Works </h2>
    <div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
      <blog-card v-for="i in 6"></blog-card>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default'
}
</script>
