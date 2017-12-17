import Vue from "vue";
import Router from "vue-router";
import LandingPage from "@/router/LandingPage";
import Board from "@/router/Board";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/board",
      name: "Board",
      component: Board
    }
  ]
});

export default router;
