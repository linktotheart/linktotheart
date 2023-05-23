<template>
  <nuxt-link class="card border group border-primary cursor-pointer"  :to="data.full_slug" >
    <figure class="max-h-[12rem] min-h-[12rem] bg-base-300">
		  <img :src="data.content.thumbnail.filename" class="max-w-md  transition-transform object-cover ease-linear group-hover:scale-110" alt="Shoes" />
	  </figure>
    <!-- <div class="tags text-sm  flex text-primary gap-2 py-3 lg:px-4 px-3 border-0 border-primary  border-y">
      <span class="tag badge badge-outline" v-for="tag in data.categories" :key="tag">#{{ tag }}</span>
    </div> -->
    <div class="body lg:p-4 p-3 border-0 border-t border-primary ">
      <!-- <nuxt-link ref="link" :to="data.path"> -->
        <h2 class="text-base mb-4 font-medium ">{{ data.content.title }}</h2>
      <!-- </nuxt-link> -->
      <!-- <p class="text-gray-200 mb-4 text-sm">
       {{ data.body.slice(0,200) }}
      </p> -->
      <div class="flex gap-x-4">
        <a target="_blank" class="btn btn-sm btn-outline btn-primary px-3.5 " v-if="data.live_link" :href="data.live_link">Live => </a>
        <a target="_blank" class="btn btn-sm btn-outline btn-secondary px-3.5" :href="data.github_link"  v-if="data.github_link" >Cached >= </a>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["data"]
}

</script>

<style>
</style>
