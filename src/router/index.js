import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Team from "@/views/Team.vue";
import NotFoundPage from "@/views/NotFoundPage";
import CreateMeme from '@/components/meme/Create';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      redirectWhenLogged(next);
    },
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/meme/create",
    name: "CreateMeme",
    component: CreateMeme,
    beforeEnter: (to, from, next) => {
      redirectWhenLogged(next);
    },
  },
  {
    path: "/404",
    component: NotFoundPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/404",
  },
];


function redirectWhenLogged(next) {
  if (localStorage.token) {
    next("/");
  } else {
    next();
  }
}

/*function redirectWhenUnlogged(next) {
  if(localStorage.token) {
    next();
  } else {
    next('/login');
  }
}*/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
