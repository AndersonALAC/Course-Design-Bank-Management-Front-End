import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/Login.vue";
import user from "../components/User.vue"
import admin from '../components/Admin.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: login },
    { path: "/home", component: user },
    {path: "/admin", component: admin}
  ],
});

router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next();

  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  next();
})

export default router;
