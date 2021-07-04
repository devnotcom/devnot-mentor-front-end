import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/Login.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import store from "@/store/index.js";
import axios from "axios";

jest.mock("axios");
Vue.use(Vuetify);

describe("Login.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(async () => {
    vuetify = new Vuetify();
  });
  it("It should redirect to homepage when user login succesfully", async () => {
    const mockRouter = { push: jest.fn() };
    const wrapper = mount(Login, {
      localVue,
      vuetify,
      store,
      mocks: {
        $router: mockRouter,
      },
    });

    axios.post.mockResolvedValue({
      data: { token: "mockToken", success: true },
    });

    let usernameTextBox = await wrapper.find("#username");
    let passwordTextBox = await wrapper.find("#password");

    usernameTextBox.setValue("devnotuser");
    passwordTextBox.setValue("devnotpassword");

    let loginButton = await wrapper.find("#signin");
    await loginButton.trigger("click");
    await Vue.nextTick();

    expect(axios.post).toHaveBeenCalledWith("/users/login", {
      password: "devnotpassword",
      userName: "devnotuser",
    });

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
