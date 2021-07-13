<template>
  <v-card class="mx-auto" shaped>
    <div
      style="
        justify-content: space-between;
        display: flex;
        position: absolute;
        width: 100%;
        padding: 15px;
      "
    >
      <div>{{ profile.country }}</div>
      <v-btn class="mx-2" fab dark color="indigo" small>
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
    <v-card-title
      ><v-avatar style="margin: 0 auto" color="secondary" size="150"></v-avatar
    ></v-card-title>

    <v-card-title>
      {{ profile.name }}
      <v-card-subtitle> {{ profile.title }}</v-card-subtitle>
    </v-card-title>
    <v-card-subtitle>
      <div style="display: flex; align-items: center">
        <v-rating
          :value="profile.star"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </div>
    </v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ profile.desc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  //   props: ["profile"],
  data() {
    return {
      show: false,
      profile: {
        name: "Merve",
        country: "Türkiye",
        title: "Software Developer",
        star: 5,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
