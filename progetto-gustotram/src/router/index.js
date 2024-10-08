import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MenuView from "../views/MenuView.vue";
import PrenotaView from "../views/PrenotaView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import MenuClassicoView from "../views/MenuClassicoView.vue";
import MenuVegView from "../views/MenuVegView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
    children: [
      {
        path: "menu-classico",
        name: "menuClassico",
        component: MenuClassicoView,
      },
      {
        path: "menu-veg",
        name: "menuVeg",
        component: MenuVegView,
      },
    ],
  },
  {
    path: "/prenota",
    name: "prenota",
    component: PrenotaView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
