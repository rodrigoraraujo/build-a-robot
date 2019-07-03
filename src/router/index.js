import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../home/Home';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts';
import RobotArms from '../parts/RobotArms';
import RobotBases from '../parts/RobotBases';
import RobotHeads from '../parts/RobotHeads';
import RobotTorsos from '../parts/RobotTorsos';
import SidebarStandard from '../sidebar/SidebarStandard';
import SidebarBuild from '../sidebar/SidebarBuild';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		components: {
			default: Home,
			sidebar: SidebarStandard
		}
	},
	{
		path: '/build',
		name: 'Build',
		components: {
			default: RobotBuilder,
			sidebar: SidebarBuild
		}
	},
	{
		path: '/parts/browse',
		name: 'BrowseParts',
		component: BrowseParts,
		props: true,
		children: [
			{
				name: 'BrowseArms',
				path: 'arms',
				component: RobotArms
			},
			{
				name: 'BrowseBases',
				path: 'bases',
				component: RobotBases
			},
			{
				name: 'BrowseHeads',
				path: 'heads',
				component: RobotHeads
			},
			{
				name: 'BrowseTorsos',
				path: 'torsos',
				component: RobotTorsos
			}
		]
	},
	{
		path: '/parts/:partType/:id',
		name: 'Parts',
		component: PartInfo,
		props: true,
		beforeEnter(to, from, next) {
			const isValidId = Number.isInteger(Number(to.params.id));
			next(isValidId);
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
