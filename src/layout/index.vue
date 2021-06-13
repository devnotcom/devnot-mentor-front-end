<template>
  <div>
    <AppBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue"
export default {
  components: {
    AppBar,
  },
};
</script>

<style lang="scss" scoped></style>
