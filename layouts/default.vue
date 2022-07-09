<template>
  <div class="wrapper flex flex-col min-h-screen">
    <the-header />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '~/components/the-footer.vue'
import theHeader from '~/components/the-header.vue'
export default {
  components: { theHeader, TheFooter }

}
</script>

<style>

</style>
