<template>
	<div class="card border group border-info border-solid bg-base-300 shadow-xl">
		<nuxt-link :to="`blogs/${data.id}`" class="border-b border-solid border-info relative block max-h-[20rem] min-h-[10rem]">
			<img :src="data.social_image" :alt="data.title" />

			<span class="badge group-hover:block absolute bottom-0 right-0 badge-primary">Published on {{data.readable_publish_date}}</span>
		</nuxt-link>
		<div class="card-body p-4 lg:p-6">
			<nuxt-link  :to="`blogs/${data.id}`" >
				<h2 class="card-title text-primary font-bold">
					{{ data.title }}
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
			</nuxt-link>
			<p>{{ data.description }}</p>
			<!-- <div class="card-actions justify-end">
				<div class="badge badge-outline" v-for="tag in data.tag_list" :key="tag">#{{tag}}</div>
			</div> -->
			<div class="card-actions pt-4 items-center justify-between">
				<nuxt-link  :to="`blogs/${data.id}`"  class="btn-primary px-6 btn btn-outline">Read More ==></nuxt-link>
				<div class="flex gap-x-3">
					<span class="text-base items-center flex justify-end gap-1 text-info">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-heart-fill" viewBox="0 0 16 16">
							<path fill-rule="evenodd"
								d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
						</svg>
						{{ data.public_reactions_count}}
					</span>
					<span class="text-base items-center flex gap-1 text-info">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-chat-left-fill" viewBox="0 0 16 16">
							<path
								d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
						</svg>
						{{ data.comments_count }}
					</span>
					<span class="text-base items-center flex gap-1 text-info">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
							<path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
						</svg>
						{{ data.reading_time_minutes}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			required: true
		}
	},
	methods: {
		pushRoutes(id) {
			console.log('id', id)
			this.$router.push({name: 'projects', slug: id })
		}
	}
}
</script>

<style>

</style>