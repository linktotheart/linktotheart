<template>
  <div class="flex px-4 container items-center mx-auto lg:text-3xl xl:text-3xl md:text-2xl py-8 lg:py-12 text-lg">
	<span class="text-primary mr-1"> # </span> <h2 class="font-medium tracking-wider lowercase">{{title}}</h2>
	<div class="flex-grow border-0 border-t border-primary ml-4 mr-8 h-px " :class="!viewBtn ? 'max-w-[40%]' : ''"></div>
	<button v-if="viewBtn" class="btn btn-ghost btn-sm ml-auto" @click="$emit('view')">View all ~~></button>
  </div>
</template>

<script>
export default {
	props: ["title","viewBtn"]
}
</script>

<style>

</style>