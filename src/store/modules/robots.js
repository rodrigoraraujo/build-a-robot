import axios from 'axios';

export default {
	namespaced: true,
	state: {
		cart: [],
		parts: null,
		foo: 'robots-foo'
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
		},
		addRobotToCart({ commit, state }, robot) {
			const cart = [ ...state.cart, robot ];
			return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot));
		}
	},
	getters: {
		saleItems: (state) => {
			return state.cart.filter((item) => item.head.onSale);
		},
		foo: (state) => {
			return `robots-getter/${state.foo}`;
		}
	}
};
