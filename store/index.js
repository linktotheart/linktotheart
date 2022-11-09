export const state = () => ({
	counter: 0,
	posts: [],
  })
  
  export const getters = {
	getCounter(state) {
	  return state.counter
	},
	getPosts(state) {
		return state.posts
	}
  }
  
  export const mutations = {
	increment(state) {
	  state.counter++
	},
	setPosts(state,payload) {
		state.posts = payload
	}
  }
  
  export const actions = {
	async fetchCounter({ state }) {
	  // make request
	  const res = { data: 10 };
	  state.counter = res.data;
	  return res.data;
	},
	async fetchPosts({state}) {
		try {
			const {data} = await this.$axios(`stories?starts_with=posts`)
			state.stories = data?.stories || []
		} catch (error) {
			console.log('error', error)
		}
		// console.log('response', response)

	}
  }