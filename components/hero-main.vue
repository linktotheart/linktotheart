<template>
  <div class="hero min-h-screen  bg-base-200">
    <div class="hero-content container mx-auto flex-col w-full justify-between lg:flex-row-reverse">
		<div class="flex items-center w-60 bg-base-300 h-60 rounded-full">
			<nuxt-img src="/img/pulkit (1).png" />
		</div>

      <div class="max-w-lg flex flex-col items-center lg:items-start">
        <div class="badge">
          Hey!
        </div>
        <h1 class="text-5xl font-bold">
          I'm <span class="text-primary">Pulkit Singh</span>
        </h1>
        <p class="py-6 text-center lg:text-left">
         I'm a Frontend developer & Art Director focused on digital design for brands that like to have fun.
        </p>
		<!-- <p class="text-sm text-gray-500 ">Working at Neotas</p> -->
		<div class="flex space-x-4">
			<button class="btn btn-primary">
			  Say Hello
			</button>
			<button class="btn ">
			  About Me
			</button>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
