import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
const apiService = {
  init() {
    Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
  },
  get(resource) {
    return Vue.axios.get(`${resource}`);
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource, params) {
    return Vue.axios.delete(`${resource}`, params);
  },
};

export default apiService;
