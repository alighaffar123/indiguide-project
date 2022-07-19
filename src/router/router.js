import { createWebHistory, createRouter } from 'vue-router';
import dash from "../view/dash.vue";

const routes = [
	{
		path: '/',
		name: 'dash-bord',
		component: dash
	},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;  