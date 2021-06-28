import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
const ApiService = {
  init() {
    Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
  },
  get(resource) {
    return Vue.axios.get(`${resource}`);
  },

  post(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .post(`${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource, params) {
    return Vue.axios.delete(`${resource}`, params);
  },
};

export default ApiService;
