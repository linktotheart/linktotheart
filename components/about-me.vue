<template>
  <div class="container">
	<div class="grid px-4  items-end mb-8 md:grid-cols-2 lg:grid-cols-3">
		<div class="lg:col-span-2 flex flex-col gap-4 text-primary">
			<p>
				Hello, i’m Pulkit! 
			</p>
			<p>
				I’m a self-taught front-end developer based in Delhi, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.  <br>
			</p>
			<p>
				Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest <code>technologies</code>  and <code class="">frameworks</code>	.
			</p>
			<div class="mt-4">
				<nuxt-link class="btn btn-primary btn-outline px-8" to="/about">
					Read More --> 
				</nuxt-link>
			</div>
		</div>
		<div class="flex relative">
			<div class="absolute animate-bounce " :class="i == 1 ? 'bottom-0 left-0 delay-200' : 'top-4 right-0 ' " v-for="i in 2" :key="i">
				<svg width="104" height="56" viewBox="0 0 104 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#C778DD"/>
<circle cx="27" cy="2" r="2" fill="#C778DD"/>
<circle cx="52" cy="2" r="2" fill="#C778DD"/>
<circle cx="77" cy="2" r="2" fill="#C778DD"/>
<circle cx="102" cy="2" r="2" fill="#C778DD"/>
<circle cx="2" cy="19.3333" r="2" fill="#C778DD"/>
<circle cx="27" cy="19.3333" r="2" fill="#C778DD"/>
<circle cx="52" cy="19.3333" r="2" fill="#C778DD"/>
<circle cx="77" cy="19.3333" r="2" fill="#C778DD"/>
<circle cx="102" cy="19.3333" r="2" fill="#C778DD"/>
<circle cx="2" cy="36.6667" r="2" fill="#C778DD"/>
<circle cx="27" cy="36.6667" r="2" fill="#C778DD"/>
<circle cx="52" cy="36.6667" r="2" fill="#C778DD"/>
<circle cx="77" cy="36.6667" r="2" fill="#C778DD"/>
<circle cx="102" cy="36.6667" r="2" fill="#C778DD"/>
<circle cx="2" cy="54" r="2" fill="#C778DD"/>
<circle cx="27" cy="54" r="2" fill="#C778DD"/>
<circle cx="52" cy="54" r="2" fill="#C778DD"/>
<circle cx="77" cy="54" r="2" fill="#C778DD"/>
<circle cx="102" cy="54" r="2" fill="#C778DD"/>
				</svg>
			</div>
			<figure class="mx-auto md:mx-0">
				<nuxt-img class="filter grayscale transform  " src="/img/pulkitsingh.png" />
			</figure>
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