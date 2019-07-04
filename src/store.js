import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cart: [],
		parts: null
	},
	mutations: {
		addRobotToCart(state, robot) {
			state.cart.push(robot);
		},
		updatedParts(state, parts) {
			state.parts = parts;
		}
	},
	actions: {
		getParts({ commit }) {
			axios.get('/api/parts').then((result) => commit('updatedParts', result.data));
		}
	},
	getters: {
		saleItems: (state) => {
			return state.cart.filter((item) => item.head.onSale);
		}
	}
});
