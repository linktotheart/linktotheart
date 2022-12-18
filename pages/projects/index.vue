<template>
  <div class="container mt-6">
	  <page-header title="Projects" desc="Creations and Ideas"></page-header>

    <div class="grid px-4 lg:px-6 gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <project-card v-for="project in all_projects" :key="project.path" :data="project"></project-card>
    </div>
  </div>
</template>

<script>
import projectCard from '~/components/project-card.vue'
export default {
	components: { projectCard },
  data() {
    return {
      all_projects: []
    }
  },
  async created() {
		try {
			const all_projects = await this.$content(`projects`).fetch()
			this.all_projects = all_projects
		} catch (error) {
			console.log('error', error)
		}
		// console.log(list)
	},
}
</script>

<style>

</style>