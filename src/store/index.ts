import { createStore } from 'vuex'

export default createStore({
	state: {
		access_token: localStorage.getItem('access_token') != null ? localStorage.getItem('access_token') : '',
	},
	mutations: {
		setAccessToken(state, payload:string){
			state.access_token = payload
			localStorage.setItem('access_token', state.access_token)
		},
	},
	actions: {
		setAccessToken(state, payload){
			state.commit('setAccessToken', payload)
		},
	},
	modules: {
	},
	getters: {
		getAccessToken(state){
			return state.access_token
		},
	}
})

