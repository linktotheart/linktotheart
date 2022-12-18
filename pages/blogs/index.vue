<template>
  <div class="container mx-auto">
	<page-header title="Blogs" desc="My journals and views on tech stacks, codeups." ></page-header>
	<div class="flex justify-center py-10" v-if="isLoading">
		<Loader />
	</div>
	<div class="grid px-4 gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 ">
		<blog-card :data="blog" v-for="blog in blog_list" :key="blog.id"/>
	</div>
  </div>
</template>

<script>
import Loader from "~/components/loader"

export default {
	components: {
		Loader
	},
	data(){
		return {
			blog_list: [],
			isLoading: false,
		}
	},
	async created() {
		this.isLoading = true
		try {
			const { data } = await this.$axios(`https://dev.to/api/articles?username=pulkitsingh`)
			this.blog_list = data
		} catch (error) {
			console.log('error', error)
		}
		this.isLoading = false
	}
}
</script>

<style>

</style>