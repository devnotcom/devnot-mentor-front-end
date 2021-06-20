import Layout from "../../layout/empty.vue";
const userAction = {
  path: "/Login",
  name: "Login",
  component: Layout,
  children: [
    {
      path: "",
      name: "",
      component: () => import("../../views/Login.vue"),
    },
    

  ],
};

export default userAction;
