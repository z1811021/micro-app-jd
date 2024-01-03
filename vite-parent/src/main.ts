import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import microApp from "@micro-zoe/micro-app";

import ReactBlue from "./ReactBlue.vue";
microApp.start();

const app = createApp(App);
const routes = [
	{
		path: "/",
		name: "index",
		component: Home,
	},
	{
		path: "/react-blue",
		name: "react-blue",
		component: ReactBlue,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
app.use(router);

app.mount("#app");
