<template>
  <v-container fluid>
    <v-row>
      <v-col style="max-width: fit-content;">
        <v-card elevation="10" style="min-height:100%">
          <FilterComponent />
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <v-col :md="3" v-for="(item, index) in profiles" :key="index">
            <Card :profile="item"
          /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "../components/Card.vue";
import FilterComponent from "../components/Filter.vue";
export default {
  components: {
    Card,
    FilterComponent,
  },
  data() {
    return {
      profiles: [
        {
          id: 1,
          technologies: ["Vue", "React", "Angular"],
          name: "Evan You",
          title: "Software Engineer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          country: "TR",
          star: 5,
        },
        {
          id: 2,
          technologies: ["React", "React-Native", "Java"],
          name: "Andrew Clark",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis Lorem ipsum dolor sit amet, ac convallis.",
          country: "DA",
          star: 2,
        },
        {
          id: 3,
          technologies: ["PHP", "Laravel", "Nodejs", "Dotnet"],
          name: "Taylor Otwell",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas as eleifend et felis ac convallis.",
          country: "EN",
          star: 4,
        },
        {
          id: 4,
          technologies: ["Vue", "Vuyetify", "Nodejs"],
          name: "John Leider",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, ttis nisl. Cras eleifend et felis ac convallis.",
          country: "UK",
          star: 4,
        },
        {
          id: 5,
          technologies: ["Vue", "React", "Angular"],
          name: "Alice",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis ac convallis.",
          country: "US",
          star: 4,
        },
        {
          id: 6,
          technologies: ["Vue", "React", "Angular"],
          name: "Evan You",
          title: "Software Engineer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          country: "TR",
          star: 5,
        },
        {
          id: 7,
          technologies: ["React", "React-Native", "Java"],
          name: "Andrew Clark",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis Lorem ipsum dolor sit amet, ac convallis.",
          country: "DA",
          star: 2,
        },
        {
          id: 8,
          technologies: ["PHP", "Laravel", "Nodejs", "Dotnet"],
          name: "Taylor Otwell",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas as eleifend et felis ac convallis.",
          country: "EN",
          star: 4,
        },
        {
          id: 9,
          technologies: ["Vue", "Vuyetify", "Nodejs"],
          name: "John Leider",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, ttis nisl. Cras eleifend et felis ac convallis.",
          country: "UK",
          star: 4,
        },
        {
          id: 5,
          technologies: ["Vue", "React", "Angular"],
          name: "Alice",
          title: "Software Engineer",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis ac convallis.",
          country: "US",
          star: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
