<template>
  <div class="container bg-base-100 mx-auto">
	<div class="card ">
		{{$route.params.slug}}

	</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			post: {}
		}
	},

	async created() {
		try {
			const slug = this.$route.params.slug
			const { data } = await this.$axios.get(`https://dev.to/api/articles/${slug}`)
			this.post = data
		} catch (error) {
			console.log('error', error)
		}
	}
}
</script>

<style>

</style>