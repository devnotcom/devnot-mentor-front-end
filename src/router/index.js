import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import base from "./modules/base";
import userAction from "./modules/userAction";

const routes = [base , userAction];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
