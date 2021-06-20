<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <faIcon icon="filter"></faIcon>
      </v-list-item-avatar>

      <v-list-item-title>Filter</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense v-if="mini == false">
      <v-list-item>
        <v-list-item-content>
          <v-autocomplete
            v-model="selectedTechnologies"
            :items="technologies"
            dense
            chips
            small-chips
            multiple
            label="Technologies"
          ></v-autocomplete>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-text-field v-model="name" label="Name"></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-text-field v-model="country" label="Country"></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <div class="text-center">
            <span class="">Rate:</span>
            <span class="font-weight-bold">
              {{ rating }}
            </span>
          </div>
          <v-rating
            style="display:flex; justify-content:space-between"
            v-model="rating"
            icon-label="custom icon label text {0} of {1}"
          ></v-rating>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-btn block rounded color="primary">Filter</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      rating: 3,
      drawer: true,
      technologies: ["Vue", "React", "Angular", "React-Native"],
      selectedTechnologies: [],
      country: "",
      name: "",
      mini: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
