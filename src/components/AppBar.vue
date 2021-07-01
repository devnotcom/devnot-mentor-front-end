<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="200"
      />
    </div>

    <v-spacer></v-spacer>
    <div v-if="showLogin" class="mx-4">
      <v-btn outlined @click="$router.push('/Login')">Giriş yap</v-btn>
    </div>
    <div v-if="showLogin" class="mx-4">
      <v-btn outlined>Kayıt ol</v-btn>
    </div>
    <div v-if="!showLogin" class="mx-4">
      {{ username }}
    </div>
    <div class="mx-4">
      <v-btn @click="$router.push('/Profile')" outlined>Profil</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showLogin: false,
      username: null,
    };
  },
  created() {
    this.username = JSON.parse(
      window.localStorage.getItem("user-profile")
    ).name;
    this.showLogin =
      window.localStorage.getItem("user-profile") == null ? true : false;
  },
};
</script>

<style scoped></style>
