<template>
	<div class="max-w-2xl px-6 py-16 mx-auto space-y-12 bg-base-200">
		<article class="space-y-8 text-gray-50">
			<div class="space-y-6" v-if="post">
				<h1 class="text-4xl font-bold md:tracking-tight md:text-5xl"  v-text="post.title"/>
				<div class="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
					<div class="flex items-center md:space-x-2">
						<p class="text-sm">{{ post.readable_publish_date }}, {{ new Date().getFullYear() }}</p>
					</div>
					<p class="flex-shrink-0 mt-3 text-sm md:mt-0">{{ post.reading_time_minutes }} min read • {{ post.public_reactions_count }} views</p>
				</div>
			</div>
			<div class="text-gray-100 prose-lg prose-headings:font-bold prose-blockquote:bg-slate-800" v-html="post.body_html"></div>
		</article>
		<div>
			<div class="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-400">
				<a rel="noopener noreferrer" href="#"
					class="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900" v-for="tg in tags" :key="tg">#{{ tg }}</a>
			</div>
			<div class="space-y-2">
				<h4 class="text-lg font-semibold">Related posts</h4>
				<ul class="ml-4 space-y-1 list-disc">
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Nunc id magna mollis</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Duis molestie, neque eget
							pretium lobortis</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" class="hover:underline">Mauris nec urna volutpat,
							aliquam lectus sit amet</a>
					</li>
				</ul>
			</div>
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
			console.log('data', data)
		} catch (error) {
			console.log('error', error)
		}
	}
}
</script>

<style>

</style>