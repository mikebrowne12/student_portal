import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Experiences from "./views/Experiences.vue";
import Education from "./views/Education.vue";
import Capstone from "./views/Capstone.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/experiences",
      name: "experiences",
      component: Experiences
    }, 
    {
      path: "/education",
      name: "education", 
      component: Education
    }, 
    {
      path: "/capstone", 
      name: "capstone", 
      component: Capstone
    }
  ]
});
