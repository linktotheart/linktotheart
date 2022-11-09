export default function ({ $axios, store}) {
	$axios.onRequest(async (config) => {
		try {
			config.params = {
				token: 'KZxg7svUcmCtMvTEUKmaYwtt'
			}
			/// Store action to get or retrieve a token if it has expired
		} catch (error) {
			console.log("Could not update", error)
		}
		return config
	})

}