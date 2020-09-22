import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
];
const router = new VueRouter({ mode: "history", routes });
export default router;
