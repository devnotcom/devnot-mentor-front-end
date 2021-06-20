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
        <v-text-field label="Username" outlined rounded></v-text-field>
      </v-col>

      <v-col :cols="12" :md="12" class="pad-0">
        <v-text-field
          outlined
          rounded
          :append-icon="isPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :type="isPasswordShow ? 'text' : 'password'"
          label="Password"
          @click:append="isPasswordShow = !isPasswordShow"
        ></v-text-field>
      </v-col>

      <v-col :cols="12" class="text-right pad-0 mb-5">
        Forgot your password?
      </v-col>

      <v-col :cols="12" :md="12">
        <v-btn block rounded color="primary" x-large>Sign in</v-btn>
      </v-col>
      <v-col :cols="12" :md="12">
        Don't have an account?
        <span class="sign-up" @click="$emit('isLoginActiveProp' , false)">Sign up Here</span>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isPasswordShow: false,
    };
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
