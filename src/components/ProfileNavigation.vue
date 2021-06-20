<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-avatar color="primary"></v-avatar>
      </v-list-item-avatar>

      <v-list-item-title></v-list-item-title>

      <v-btn icon @click.stop="$emit('miniProp', (mini = !mini))">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        link
        @click="changeActiveNavigationElement(item.id)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      mini: false,
      isProfileCardActive: true,
      navigationItems: [
        { id: 1, title: "Profil", icon: "mdi-account", active: true },
        {
          id: 2,
          title: "Güvenlik & Gizlilik",
          icon: "mdi-account",
          active: false,
        },
      ],
    };
  },
  methods: {
    changeActiveNavigationElement(param) {
      if (param == 1) {
        this.isProfileCardActive = true;
      } else {
        this.isProfileCardActive = false;
      }
      this.$emit("isProfileCardActiveProp", this.isProfileCardActive);
    },
  },
};
</script>

<style lang="scss" scoped></style>
