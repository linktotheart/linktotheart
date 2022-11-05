<template>
  <div class="card border group border-primary cursor-pointer">
    <figure class="max-h-[10rem] min-h-[10rem] bg-base-300 overflow-hidden flex">
		  <img src="https://placeimg.com/400/225/arch" class="object-fill transform transition-transform ease-linear group-hover:scale-110" alt="Shoes" />
	  </figure>
    <div class="tags text-sm text-primary gap-2 py-3 lg:px-4 px-3 border-0 border-primary  border-y">
      <span>html</span>
      <span>JS</span>
      <span>Node</span>
      <span>CSS</span>
    </div>
    <div class="body lg:p-4 p-3 ">
      <h2 class="text-lg mb-4 font-medium ">My New Post</h2>
      <p class="text-gray-200 mb-4 text-sm">
        Lorem ipsum dolor, sit amet consectetur.
      </p>
      <div class="flex gap-x-4">
        <button class="btn btn-sm btn-outline btn-primary px-4">Live => </button>
        <button class="btn btn-sm btn-outline btn-primary px-4">Cached >= </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title","tags","description","links","thumb"]
}
</script>

<style>
</style>
