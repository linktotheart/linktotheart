<template>
	<div class="container">
		<page-header :title="'contact-me'" desc="send me a messge" />
		<section-header title="say hello" />
		<div class="px-4">
			<contact />
		</div>
		<section-header title="follow me" />

	</div>
</template>

<script>
import pageHeader from '~/components/page-header.vue'
import SectionHeader from '~/components/section-header.vue'
export default {
	components: { pageHeader,SectionHeader },

}
</script>

<style>

</style>