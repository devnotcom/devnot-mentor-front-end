<template>
  <div class="appbar">
    <div class="logo"></div>
    <div class="spacer"></div>
    <div class="account-settings">
      <button class="btn">Login</button>
      <button class="btn">Register</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.account-settings > .btn {
  margin: 0px 15px;
}
.btn {
  min-width: 80px;
  min-height: 40px;
  border: none;
  box-shadow: 1px 0px 5px 0px grey;
}
.appbar {
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 30%);
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
  border-radius: 0px 0px 50px 50px;
  height: 10vh;
}
.logo {
  height: 40px;
  width: 150px;
  background-color: rgb(117, 117, 117);
}
.spacer {
  flex: 1;
}
</style>
