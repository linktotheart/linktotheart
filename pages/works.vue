<template>
  <div class="container">
	<page-header :title="'works'" desc="my awesome creations" />

	<div class="grid grid-cols-3 gap-4 px-4">
		<blog-card title="Post title with some details" v-for="i in 9" :key="i" />
	</div>
  </div>
</template>

<script>
import blogCard from '~/components/blog-card.vue'
export default {
	components: { blogCard },

}
</script>

<style>

</style>