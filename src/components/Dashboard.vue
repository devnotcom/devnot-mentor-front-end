<template>
  <div>
    <v-card>
      <v-tabs v-model="tab" background-color="transparent" color="#54A1E0">
        <v-tab v-for="item in items" :key="item" :class="tabClass">
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;&nbsp;&nbsp;
          <span v-if="mobile">{{ item.name }}</span>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card color="#edf5fb" flat>
            <v-card-text
              class="pt-10 pb-10"
              :class="{ expand: $vuetify.breakpoint.xs }"
              flat
            >
              <Mentee />
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card color="#edf5fb" flat>
            <v-card-text>Mesajlar</v-card-text>
            <v-card color="#edf5fb" flat>
              <v-gravatar
                default-img="https://imgur.com/dLB4u3s.png"
                size="200"
              ></v-gravatar>
            </v-card>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card color="#edf5fb" flat>
            <v-card-text>Hedefler</v-card-text>
            <v-card class="ma-5"> </v-card>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card color="#edf5fb" flat>
            <v-card-text>Mentor Ayarlari</v-card-text>
            <v-card class="ma-5"> </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import Mentee from "./Mentee.vue";
export default {
  components: {
    Mentee,
  },
  data() {
    return {
      tab: null,
      items: [
        { name: "Mentee Listesi", icon: "mdi-account-outline" },
        { name: "Mesajlar", icon: "mdi-message-processing-outline" },
        { name: "Hedefler", icon: "mdi-flag-checkered" },
        { name: "Mentor Ayarları", icon: "mdi-crop-landscape" },
      ],
    };
  },
  computed: {
    mobile() {
      return !this.$vuetify.breakpoint.xs;
    },
    tabClass() {
      return this.$vuetify.breakpoint.xs ? "pr-0" : "pr-4";
    },
  },
};
</script>
<style scoped>
.expand {
  padding-left: 0;
  padding-right: 0;
}
</style>