<template>
  <v-form style="max-width:400px; margin:0 auto">
    <div class="display-3 font-weight-bold my-15">
      Devnot
    </div>
    <div class="display-1  my-8">
      Welcome to Devnot
    </div>
    <v-row>
      <v-col :cols="12" :md="12" class="pad-0">
        <v-text-field
          v-model="username"
          label="Username"
          outlined
          rounded
        ></v-text-field>
      </v-col>

      <v-col :cols="12" :md="12" class="pad-0">
        <v-text-field
          v-model="password"
          label="Username"
          outlined
          rounded
          :append-icon="isPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :type="isPasswordShow ? 'text' : 'password'"
          @click:append="isPasswordShow = !isPasswordShow"
        ></v-text-field>
      </v-col>

      <v-col :cols="12" class="text-right pad-0 mb-5">
        Forgot your password?
      </v-col>

      <v-col :cols="12" :md="12">
        <v-btn block rounded color="primary" x-large @click="login()"
          >Sign in</v-btn
        >
      </v-col>
      <v-col :cols="12" :md="12">
        Don't have an account?
        <span class="sign-up" @click="$emit('isLoginActiveProp', false)"
          >Sign up Here</span
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { USER_LOGIN } from "@/store/actions.type";
export default {
  data() {
    return {
      isPasswordShow: false,
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      let obj = {
        userName: this.username,
        password: this.password,
      };

      this.$store
        .dispatch(USER_LOGIN, obj)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.pad-0 {
  padding: 0px;
}
.sign-up {
  color: #1976d2;
  font-weight: 500;
  cursor: pointer;
}
</style>
