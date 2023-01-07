<template>
  <div class="skill card border  min-w-full border-secondary">
	<div class="card-header capitalize py-2 border-0 border-b border-secondary font-medium text-white px-3">{{title}}</div>
	<div class="p-2 flex-wrap flex gap-x-2" >
		<span class="text-secondary text-sm " v-for="skl in skills" :key="skl" v-text="skl" />
	</div>
  </div>
</template>

<script>
export default {
	props: ['title','skills']
}
</script>

<style>

</style>