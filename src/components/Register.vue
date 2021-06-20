<template>
  <v-form style="max-width:400px; margin:0 auto">
    <div class="display-2 font-weight-bold">
      Create Account
    </div>
    <div class="mb-3">Create your <span>Devnot</span> mentors account</div>
    <v-divider class="mb-10"></v-divider>
    <v-row>
      <v-col :cols="12" :md="6" class="pad-0 d-flex">
        <input v-show="false" type="file" ref="avatar" @change="previewFiles" />
        <v-avatar @click="$refs.avatar.click()" size="150px" class="avatar">
          <img style="object-fit:cover" v-if="url" :src="url" />
          <div
            v-else
            style="background-color:rgba(0,0,0,0.1); height:100%;width:100%"
          >
            <faIcon
              style="font-size:24px;color:rgba(0,0,0,0.3);"
              icon="images"
            ></faIcon>
          </div>
        </v-avatar>
      </v-col>
      <v-col :cols="12" :md="6" class="pad-0">
        <v-text-field label="Name" outlined rounded></v-text-field>
        <v-text-field label="Surname" outlined rounded></v-text-field>
      </v-col>
      <v-col :cols="12" :md="12" class="pad-0">
        <v-text-field label="Username" outlined rounded></v-text-field>
      </v-col>
      <v-col :cols="12" :md="12" class="pad-0">
        <v-text-field label="Email" outlined rounded></v-text-field>
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

      <v-col :cols="12" :md="6"> </v-col>
      <v-col :cols="12" :md="12" class="pad-0">
        <v-btn block rounded color="primary" x-large>Sign up</v-btn>
      </v-col>
      <v-col :md="12">
        You have an account?
        <span class="sign-up" @click="$emit('isLoginActiveProp', true)"
          >Sign in here</span
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isPasswordShow: false,
      url: null,
      image: null,
    };
  },
  methods: {
    previewFiles(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.pad-0 {
  padding: 0px 15px;
}
.sign-up {
  color: #1976d2;
  font-weight: 500;
  cursor: pointer;
}
.avatar {
  cursor: pointer;
  margin:0 auto;
}
</style>
