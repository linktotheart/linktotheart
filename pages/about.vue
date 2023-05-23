<template>
	<div class="container">
		<page-header title="about-me" desc="who am i?"></page-header>
		<about-me hideButton />

		<div class="mx-auto my-8 opacity-20 animate-spin border-0 border-t border-primary lg:w-1/3 w-1/2"></div>

		<section-header :title="'skills'" />
		<div class="grid gap-4 md:grid-cols-3 grid-cols-2 lg:grid-cols-4 px-4">
			<Skill v-for="item in  skills" :key="item.id" :title="item.title" :skills="item.skills" />
		</div>

		<section-header :title="'fun-facts'" />
		<div class="grid lg:grid-cols-3 sm:grid-cols-2  px-4">
			<div class="facts col-span-2 gap-4 flex flex-wrap">
				<span v-for="fct in facts" :key="fct" class="badge badge-outline badge-lg badge-info font-mono px-3" v-text="fct" />
			</div>
			<div class="about  relative ">
				<div class="top-0 right-0 animate-pulse absolute">
					<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
						<mask id="path-1-inside-1_52_1835" fill="white">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0H85.75H114V28.25V56.5V84.75H85.75H57.5V56.5H85.75V28.25H57.5V0Z"/>
						</mask>
						<path d="M57.5 0V-1H56.5V0H57.5ZM114 0H115V-1H114V0ZM114 84.75V85.75H115V84.75H114ZM57.5 84.75H56.5V85.75H57.5V84.75ZM57.5 56.5V55.5H56.5V56.5H57.5ZM85.75 56.5V57.5H86.75V56.5H85.75ZM85.75 28.25H86.75V27.25H85.75V28.25ZM57.5 28.25H56.5V29.25H57.5V28.25ZM85.75 -1H57.5V1H85.75V-1ZM114 -1H85.75V1H114V-1ZM115 28.25V0H113V28.25H115ZM115 56.5V28.25H113V56.5H115ZM115 84.75V56.5H113V84.75H115ZM85.75 85.75H114V83.75H85.75V85.75ZM85.75 83.75H57.5V85.75H85.75V83.75ZM58.5 84.75V56.5H56.5V84.75H58.5ZM57.5 57.5H85.75V55.5H57.5V57.5ZM84.75 28.25V56.5H86.75V28.25H84.75ZM57.5 29.25H85.75V27.25H57.5V29.25ZM56.5 0V28.25H58.5V0H56.5Z" fill="#C778DD" mask="url(#path-1-inside-1_52_1835)"/>
						<mask id="path-3-outside-2_52_1835" maskUnits="userSpaceOnUse" x="0" y="27.2501" width="59" height="87" fill="black">
						<rect fill="white" y="27.2501" width="59" height="87"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M1 28.2501H29.25H57.5V56.5001H29.25V84.7501H57.5V113H29.25H1V84.7501V56.5001V28.2501Z"/>
						</mask>
						<path d="M1 28.2501V27.2501H0V28.2501H1ZM57.5 28.2501H58.5V27.2501H57.5V28.2501ZM57.5 56.5001V57.5001H58.5V56.5001H57.5ZM29.25 56.5001V55.5001H28.25V56.5001H29.25ZM29.25 84.7501H28.25V85.7501H29.25V84.7501ZM57.5 84.7501H58.5V83.7501H57.5V84.7501ZM57.5 113V114H58.5V113H57.5ZM1 113H0V114H1V113ZM29.25 27.2501H1V29.2501H29.25V27.2501ZM57.5 27.2501H29.25V29.2501H57.5V27.2501ZM58.5 56.5001V28.2501H56.5V56.5001H58.5ZM29.25 57.5001H57.5V55.5001H29.25V57.5001ZM30.25 84.7501V56.5001H28.25V84.7501H30.25ZM29.25 85.7501H57.5V83.7501H29.25V85.7501ZM56.5 84.7501V113H58.5V84.7501H56.5ZM57.5 112H29.25V114H57.5V112ZM1 114H29.25V112H1V114ZM0 84.7501V113H2V84.7501H0ZM0 56.5001V84.7501H2V56.5001H0ZM0 28.2501V56.5001H2V28.2501H0Z" fill="#C778DD" mask="url(#path-3-outside-2_52_1835)"/>
					</svg>
				</div>
				<div class="absolute bottom-0 left-0 animate-bounce">
					<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="2" cy="2" r="2" fill="#ABB2BF"/>
						<circle cx="22" cy="2" r="2" fill="#ABB2BF"/>
						<circle cx="42" cy="2" r="2" fill="#ABB2BF"/>
						<circle cx="62" cy="2" r="2" fill="#ABB2BF"/>
						<circle cx="2" cy="22" r="2" fill="#ABB2BF"/>
						<circle cx="22" cy="22" r="2" fill="#ABB2BF"/>
						<circle cx="42" cy="22" r="2" fill="#ABB2BF"/>
						<circle cx="62" cy="22" r="2" fill="#ABB2BF"/>
						<circle cx="2" cy="42" r="2" fill="#ABB2BF"/>
						<circle cx="22" cy="42" r="2" fill="#ABB2BF"/>
						<circle cx="42" cy="42" r="2" fill="#ABB2BF"/>
						<circle cx="62" cy="42" r="2" fill="#ABB2BF"/>
						<circle cx="2" cy="62" r="2" fill="#ABB2BF"/>
						<circle cx="22" cy="62" r="2" fill="#ABB2BF"/>
						<circle cx="42" cy="62" r="2" fill="#ABB2BF"/>
						<circle cx="62" cy="62" r="2" fill="#ABB2BF"/>
					</svg>
				</div>
			</div>
		</div>
		<div class="mt-10 py-8 flex lg:mt-16 mb-16">
			<Quote class="ml-auto" cite="Katharine Whitehorn" quote="Find out what you like doing best, and get someone to pay you for it." />
		</div>
	</div>
</template>

<script>
import AboutMe from '~/components/about-me.vue'
import pageHeader from '~/components/page-header.vue'
import SectionHeader from '~/components/section-header.vue'
export default {
	components: { pageHeader, AboutMe, SectionHeader },
	data() {
		return {
			skills: [
				{
					title: "languages",
					skills: ['JavaScript','C#','Lua',"Python","Dart"]
				},
				{
					title: "Databases",
					skills: ['MongoDb','SQLite',"Postgres"]
				},
				{
					title: "Frameworks",
					skills: ['React','Vue',"Nuxt","Gatsby","Gridsome","Next","Express","Strapi"].map(el => el + '.js')
				},
				{
					title: "Tools",
					skills: ['NeoVim','Figma/Adobe XD',"XCFE","Arch/Mate", "Git", "Kde", "Fish","PoSh","AWS Amplify", "Firebase", "Photoshop", "Blender", "Unity3d"]
				},
				{
					title: "Others",
					skills: ['HTML','SCSS/CSS',"EJS/HandleBars","Rest", "Jinja", "Liquid"]
				},
				
			],
			facts: [
				'🎬 My favorite movie is The Great Gatsby',
				'🫥 Introvert',
				'📖 I like reading mysteries/thrillers in summers',
				'🍕 I like pizza and pasta',
				'🐈 I like cats more than dogs ',
				'🎮 I love 90s retro/arcade games',
			]
		}
	}
}
</script>

<style>

</style>