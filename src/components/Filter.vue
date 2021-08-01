<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    class="mt-12"
    permanent
    floating
  >
    <v-card elevation="2" class="" outlined>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-filter-variant</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Filtrele</v-list-item-title>

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
              chips
              multiple
              label="Tagler"
            ></v-autocomplete>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field v-model="name" label="İsim"></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field v-model="country" label="Ülke"></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item>
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
      </v-list-item> -->
        <v-list-item>
          <v-list-item-content>
            <v-btn
              block
              elevation="1"
              outlined
              color="#edf5fb"
              class="blue-grey--text text--darken-4"
              >Uygula</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
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
