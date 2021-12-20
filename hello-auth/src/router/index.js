import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ExternalApiView from "../views/ExternalApi.vue";
import Profile from "../views/Profile.vue";
import { authGuard } from "../auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/external-api",
    name: "external-api",
    component: ExternalApiView,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
