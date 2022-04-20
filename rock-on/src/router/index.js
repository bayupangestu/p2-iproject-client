import { createRouter, createWebHistory } from "vue-router";
import Forum from "@/views/Forum.vue";
import Concert from "@/views/Concert.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import News from "@/views/News.vue";
import Thread from "@/views/Thread.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "forum",
      component: Forum,
    },
    {
      path: "/concerts",
      name: "concert",
      component: Concert,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/threads",
      name: "thread",
      component: Thread,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if (to.name === "login" || to.name === "register") {
    if (isAuthenticated) {
      next({ name: "forum" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
