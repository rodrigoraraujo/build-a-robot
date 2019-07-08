import axios from 'axios';

export default {
	namespaced: true,
	state: {
		user: null
	},
	mutations: {
		updateCurrentUser(state, user) {
			state.user = user;
		}
	},
	getters: {},
	actions: {
		signIn({ commit }) {
			/* eslint-disable */
			axios.post('/api/sign-in').then((result) => commit('updateCurrentUser', result.data)).catch(console.error);
		},
		addRobotToCart() {
			console.log('user dispatches addRobotToCart...');
		}
	}
};
