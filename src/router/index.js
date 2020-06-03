import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: login },
  ],
});

export default router;
