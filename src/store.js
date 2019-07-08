import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './store/modules/robots';
import usersModule from './store/modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		foo: 'root-foo'
	},
	modules: {
		robots: robotsModule,
		users: usersModule
	},
	getters: {
		foo: (state) => {
			return `root-getter/${state.foo}`;
		}
	}
});
