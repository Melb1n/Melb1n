import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import Game from "./components/Game";
import StartPage from "./components/StartPage";
import BootstrapVue from "bootstrap-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: "*",
    component: StartPage,
  },
  {
    path: "/game",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Game,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
