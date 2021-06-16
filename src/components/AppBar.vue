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
    <div class="mx-4">
      <v-btn outlined>Giriş yap</v-btn>
    </div>
    <div class="mx-4">
      <v-btn outlined>Kayıt ol</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped></style>
