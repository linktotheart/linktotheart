export const state = () => ({
	counter: 0,
	posts: [],
})
export const getters = {

	getPosts(state) {
		return state.posts
	}
}
export const mutations = {
	
	// setPosts(state,payload) {
	// 	state.posts = payload
	// },
	SET_POSTS(state, payload) {
		state.posts = payload

	}
}
export const actions = {

	async fetchPosts({commit}, ) {
		try {
			const {data} = await this.$axios(`https://api.storyblok.com/v2/cdn/stories`)
			commit("SET_POSTS", data.stories || [])
		} catch (error) {
			console.log('error', error)
		}
		// console.log('response', response)
	}
}