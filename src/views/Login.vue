<template>
  <div class="LoginPage">
    <v-container class="wrapper-container">
      <v-card shaped elevation="20" class="wrapper-card">
        <v-row class="wrapper-row">
          <v-col :cols="1" :sm="1" :md="4" :lg="6" class="background-area"></v-col>
          <v-col :cols="11" :sm="11" :md="8" :lg="6" class="form-wrapper">
            <LoginComponent
              v-if="isLoginActive"
              v-on:isLoginActiveProp="isLoginActive = $event"
            />
            <RegisterComponent
              v-else
              v-on:isLoginActiveProp="isLoginActive = $event"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import LoginComponent from "../components/Login.vue";
import RegisterComponent from "../components/Register.vue";

export default {
  components: {
    LoginComponent,
    RegisterComponent,
  },
  data() {
    return {
      isLoginActive: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  max-height: 100%;
  overflow: auto;
}
.LoginPage {
  background: #efefef;
}
.wrapper-card {
  height: 100%;
  display: flex;
  align-items: center;
}
.wrapper-row {
  margin: 0px;
  height: 100%;
  align-items: center;
}
.background-area {
  background-color: #1976d2;
  height: 100%;
  border-radius: 25px 80% 100px 0px;
}
.wrapper-container {
  height: 100vh;
  align-items: center;
  padding: 50px 0px;
}
.pad-0 {
  padding: 0;
}
</style>
