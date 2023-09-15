import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    { path: "/not-found", name: "not-found", component: NotFoundPage },
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
  ],
});

export { router };
