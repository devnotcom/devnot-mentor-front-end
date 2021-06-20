import Layout from "../../layout/index.vue";
const base = {
  path: "/",
  name: "Home",
  component: Layout,
  children: [
    {
      path: "",
      name: "",
      component: () => import("../../views/Home.vue"),
    },
    {
      path: "Profile",
      name: "Profile",
      component: () => import("../../views/Profile.vue"),
    },
    {
      path: "Users",
      name: "Users",
      component: () => import("../../views/Users.vue"),
    },
  ],
};

export default base;
