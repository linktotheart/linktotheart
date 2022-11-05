<template>
  <div class="flex px-4 flex-col py-8 lg:py-12 mb-4 lg:mb-8">
	<h1 class="text-2xl lg:text-3xl mb-2 font-bold text-white"><span class="text-primary">/</span>{{title}} </h1>
	<p class="text-gray-400">{{desc}}</p>
  </div>
</template>

<script>
export default {
	props: ["title","desc"]
}
</script>

<style>

</style>