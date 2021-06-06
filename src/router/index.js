import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import base from "./modules/base";

const routes = [base];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
