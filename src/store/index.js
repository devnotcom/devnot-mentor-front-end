import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user.module";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user },
});
