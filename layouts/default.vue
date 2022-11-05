<template>
  <div class="wrapper flex flex-col min-h-screen">
    <the-header />

    <main class="flex-grow">
      <transition name="fade"  appear>

        <Nuxt />

      </transition>
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
.fade-enter-active {
  transition: all 0.25s ease;
}
.fade-enter {
  transform: translateY(1rem);
  opacity: 0.1;
  /* filter: blur(2px); */
}

</style>
