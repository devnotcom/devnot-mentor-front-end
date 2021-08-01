<template>
  <v-container fluid>
    <v-row>
      <v-col style="max-width: fit-content;" :xs="12" :sm="12" :md="12">
        <!-- <v-card style="min-height:100%" flat> -->
        <FilterComponent />
        <!-- </v-card> -->
      </v-col>
      <v-col :xs="12">
        <v-row>
          <v-col
            :sm="12"
            :md="12"
            :lg="4"
            :xl="3"
            v-for="(item, index) in profiles"
            :key="index"
          >
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
          short: "android , ios developer C# .net SQL and NoSQL",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          country: "TR",
          star: 5,
          avatar: "https://i.pravatar.cc/150?img=12",
          heart: true,
        },
        {
          id: 2,
          technologies: [
            "React",
            "React-Native",
            "Java",
            "Docker",
            "Linux",
            "Django",
          ],
          name: "Andrew Clark",
          title: "Software Engineer",
          short:
            "Self-taught developer, 8+ years experience, entertainment & food tech.",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis Lorem ipsum dolor sit amet, ac convallis.",
          country: "DA",
          star: 2,
          avatar: "https://i.pravatar.cc/150?img=8",
        },
        {
          id: 3,
          technologies: ["PHP", "Laravel", "Nodejs", "Dotnet"],
          name: "Taylor Otwell",
          title: "Software Engineer",
          short:
            "self-taught, daughter-driven programmer - had a career switch (former marketeer)",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas as eleifend et felis ac convallis.",
          country: "EN",
          star: 4,
          avatar: "https://i.pravatar.cc/150?img=16",
        },
        {
          id: 4,
          technologies: ["Vue", "Vuyetify", "Nodejs"],
          name: "John Leider",
          title: "Software Engineer",
          short:
            "passionate mobile and web developer with experience in remote working",
          desc:
            "Lorem ipsum dolor sit amet, ttis nisl. Cras eleifend et felis ac convallis.",
          country: "UK",
          star: 4,
          avatar: "https://i.pravatar.cc/150?img=32",
        },
        {
          id: 5,
          technologies: ["Vue", "React", "Angular"],
          name: "Alice",
          title: "Software Engineer",
          short:
            "Experienced Software Engineer with 12+ years of experience, and a demonstrated history of working in the Mobile industry.",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis ac convallis.",
          country: "US",
          star: 4,
          avatar: "https://i.pravatar.cc/150?img=18",
        },
        {
          id: 6,
          technologies: ["Vue", "React", "Angular"],
          name: "Evan You",
          title: "Software Engineer",
          short: "Cloud architect, focused on Azure, also involved in devops",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          country: "TR",
          star: 5,
          avatar: "https://i.pravatar.cc/150?img=27",
        },
        {
          id: 7,
          technologies: ["React", "React-Native", "Java"],
          name: "Andrew Clark",
          title: "Software Engineer",
          short: "Sharing knowledge enriches everyone.",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis Lorem ipsum dolor sit amet, ac convallis.",
          country: "DA",
          star: 2,
          avatar: "https://i.pravatar.cc/150?img=11",
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
          avatar: "https://i.pravatar.cc/150?img=25",
        },
        {
          id: 9,
          technologies: ["Vue", "Vuyetify", "Nodejs"],
          name: "John Leider",
          title: "Software Engineer",
          short: "",
          desc:
            "Lorem ipsum dolor sit amet, ttis nisl. Cras eleifend et felis ac convallis.",
          country: "UK",
          star: 4,
          avatar: "https://i.pravatar.cc/150?img=23",
        },
        {
          id: 5,
          technologies: ["Vue", "React", "Angular"],
          name: "Alice",
          title: "Software Engineer",
          short: "",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis nisl. Cras eleifend et felis ac convallis.",
          country: "US",
          star: 4,
          avatar: "https://i.pravatar.cc/150?img=24",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
