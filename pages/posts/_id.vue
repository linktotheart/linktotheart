<template>
	<div>
	  test-{{ $route.params.id   }}
    fff {{posts}}
	</div>
  </template>

  <script>
  export default {
    mounted: () => {
      
    },
    async asyncData({ params }) {
      const posts = await   queryContent('posts', params.id)
        .only(['title'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        posts
      }
    }
  }
  </script>
  
  <style>
  
  </style>