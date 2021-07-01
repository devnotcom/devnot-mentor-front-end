import ApiService from "@/services/apiService";
import { USER_LOGIN } from "@/store/actions.type";
import { SET_USER } from "@/store/mutations.type";

const state = {
  isAuth : false,
};
const getters = {};
const actions = {
  [USER_LOGIN](context, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("/users/login", payload)
        .then((response) => {
          context.commit(SET_USER, response.data);
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
    state.isAuth = true;
    window.localStorage.setItem(
      "user-token",
      JSON.stringify(payload.data.token)
    );
    window.localStorage.setItem(
      "user-profile",
      JSON.stringify(payload.data.user)
    );
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
