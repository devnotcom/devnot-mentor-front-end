import ApiService from "@/services/ApiService";
import { USER_LOGIN } from "@/store/actions.type";
import { SET_USER } from "@/store/mutations.type";

const state = {};
const getters = {};
const actions = {
  [USER_LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/users/login", payload)
        .then((response) => {
          context.commit(SET_USER, response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
const mutations = {
  [SET_USER](state, payload) {
    window.localStorage.setItem("user", JSON.stringify(payload.data));
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
