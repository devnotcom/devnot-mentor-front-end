<template>
  <v-container fluid>
    <v-row class="mt-5">
      <v-col :cols="12" :sm="12" :md="3" :lg="3">
        <v-card>
          <v-col class="d-flex justify-end pad-0">
            <v-btn x-large icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
          <v-col class="text-center" :cols="12">
            <v-avatar color="primary" size="150">
              <img src="https://i.pravatar.cc/150?img=9" />
            </v-avatar>
          </v-col>
          <v-col class="text-center" :cols="12">
            <v-card-title class="pad-0 justify-center">
              {{ userInfo.fullName }}
            </v-card-title>
          </v-col>
          <v-col class="text-center" :cols="12">
            <v-card-subtitle class="pad-0">
              {{ userInfo.title }}
            </v-card-subtitle>
          </v-col>
          <v-col :cols="12" class="text-center">
            <v-btn
              v-for="(item, index) in userInfo.social"
              :key="index"
              class="mx-2"
              fab
              dark
              medium
              :color="item.color"
              style="font-size: 16px"
            >
              <faIcon :icon="['fab', item.icon]" />
            </v-btn>
          </v-col>
          <v-col :cols="12">
            <v-card-subtitle>{{ userInfo.description }}</v-card-subtitle>
          </v-col>

          <v-divider></v-divider>
          <v-col :cols="12">
            <v-chip
              v-for="(item, index) in userInfo.skills"
              :key="index"
              class="ma-2"
              color="primary"
              text-color="white"
            >
              {{ item.name }}
              <v-icon right> mdi-star </v-icon>
            </v-chip>
          </v-col>
        </v-card>
      </v-col>
      <v-col :cols="12" :sm="12" :md="9" :lg="9">
        <Dashboard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";

export default {
  components: {
    Dashboard,
  },
  data() {
    return {
      userInfo: {
        id: 1,
        title: "Software Developer",
        fullName: "Merve Soykan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtincidunt justo tristique velit lacinia euismod. Donec accumsan ante mi. Sed iaculis purus at scelerisque iaculis. Suspendisse potenti.",
        social: [
          { type: "facebook", color: "#4867aa", icon: "facebook" },
          { type: "facebook", color: "#161b22", icon: "github" },
          { type: "facebook", color: "#0a66c2", icon: "linkedin" },
        ],
        skills: [
          { name: "Vue", rate: "Good" },
          { name: "React", rate: "Good" },
          { name: "React Native", rate: "Good" },
          { name: "Angular", rate: "Good" },
          { name: ".Net", rate: "Good" },
        ],
        bestSkills: [{ name: "Vue" }, { name: "React" }, { name: "Angular" }],
      },
    };
  },
};
</script>

<style scoped>
.pad-0 {
  padding: 0;
}
</style>
