import Vue from "vue";
import VueRouter from "vue-router";
import Game from "../components/Game";
import App from "../App";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/game",
    name: "Game",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Game,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
