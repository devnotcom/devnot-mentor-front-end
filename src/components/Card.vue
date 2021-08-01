<template>
  <v-flex d-flex>
    <v-layout wrap>
      <v-flex md12>
        <v-card class="mx-auto mt-12" elevation="2" outlined>
          <div
            style="
                justify-content: space-between;
                display: flex;
                position: absolute;
                width: 100%;
            "
          >
            <div class="pa-4">
              <v-icon color="blue lighten-2">mdi-map-marker</v-icon>
              {{ profile.country }}
            </div>
            <div class="pa-4">
              <v-btn text icon color="blue lighten-2">
                <v-icon>
                  {{ like ? "mdi-heart" : "mdi-heart-outline" }}
                </v-icon>
              </v-btn>
            </div>
          </div>
          <div class="d-flex flex-column mb-n8">
            <v-avatar
              style="margin: 0 auto"
              color="secondary"
              size="120"
              class="offset"
              ><img v-if="profile.avatar" alt="Avatar" :src="profile.avatar" />
            </v-avatar>
          </div>

          <div class="text-center">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  profile.name
                }}</v-list-item-title>
                <v-list-item-subtitle>{{ profile.title }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item dense v-if="profile.short">
              <v-list-item-content>
                <v-list-item-title
                  class="text-wrap blue-grey--text text--darken-3"
                >
                  {{ profile.short }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <div class="pt-4">
              <v-chip
                small
                v-for="(tech, index) in profile.technologies"
                :key="index"
                class="mr-2 mb-2"
                color="blue-grey darken-1"
                @click="lights"
                dark
              >
                <!-- <v-icon left>mdi-brightness-5</v-icon> -->
                {{ tech }}
              </v-chip>
            </div>

            <div class="my-4">
              <v-btn
                elevation="1"
                outlined
                color="#edf5fb"
                class="blue-grey--text text--darken-4"
                >Profile Git</v-btn
              >
            </div>
          </div>

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
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
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
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: ["profile"],
  like: false,
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.offset {
  top: -35px;
  position: relative;
}
</style>
