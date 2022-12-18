<template>
  <div class="article lg:max-w-3xl xl:max-w-4xl mx-auto mt-4 lg:mt-6">
	<!-- {{$route.params.slug}} -->
	<div class="flex justify-between text-gray-400  py-2">
		<router-link to="/projects" class="link link-hover hover:text-white inline-block"> &lt-- Back to Projects </router-link>
		<p class="italic text-md">Published at {{formateDate(project.createdAt)}} </p>
	</div>
	<h1 class="title prose-headings: text-3xl lg:text-4xl font-black text-primary">{{project.title}}</h1>
	<nuxt-content :document="project" class="prose lg:prose-lg xl:prose-xl gap-2 mt-6" tag="article" />
  </div>
</template>

<script>
export default {
	data() {
		return {
			project: {}
		}
	},
	async mounted() {
		try {
			const post = await this.$content(`/projects/${this.$route.params.slug}`).fetch()
			this.project = post
			console.log(post);
		} catch (error) {
			console.log('error', error)
		}
		// console.log(list)

	},

	methods: {
		formateDate(date){
			let dt = new Date(date)
			return dt.toLocaleDateString({weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})
		}
	}
}
</script>

<style>

</style>