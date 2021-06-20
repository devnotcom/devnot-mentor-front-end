<template>
  <v-row style="margin:0">
    <v-col cols="12" class="d-flex justify-end pad-0">
      <v-btn x-large icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-col>
    <v-col class="text-center" :md="3" sm="12" :cols="12">
      <v-avatar color="primary" size="150"></v-avatar>
    </v-col>
    <v-col :md="6" :sm="12" :cols="12">
      <v-card-title class="">
        {{ userInfo.fullName }}
      </v-card-title>
      <v-card-subtitle class="">
        {{ userInfo.title }}
      </v-card-subtitle>
      <v-row>
        <v-col :cols="12">
          <v-btn
            v-for="(item, index) in userInfo.social"
            :key="index"
            class="mx-2"
            fab
            dark
            small
            :color="item.color"
            style="font-size:18px"
          >
            <faIcon :icon="['fab', item.icon]" />
          </v-btn>
        </v-col>
      </v-row>
      <v-card-subtitle>{{ userInfo.description }}</v-card-subtitle>
    </v-col>
    <v-col :md="3" :sm="12" :cols="12">
      <v-chip
        v-for="(item, index) in userInfo.skills"
        :key="index"
        class="ma-2"
        color="primary"
        text-color="white"
      >
        {{ item.name }}
        <v-icon right>
          mdi-star
        </v-icon>
      </v-chip>
    </v-col>

    <v-divider></v-divider>
    <v-col :cols="12"> </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["userInfo"],
};
</script>

<style lang="scss" scoped>
.pad-0 {
  padding: 0;
}
</style>
