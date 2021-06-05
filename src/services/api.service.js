import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
const apiService = {
  init() {
    Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
  },
  get(resource) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get(`${resource}`)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
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
    return new Promise((resolve, reject) => {
      Vue.axios
        .put(`${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  delete(resource, params) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .delete(`${resource}`, params)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default apiService;