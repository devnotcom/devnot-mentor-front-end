<template>
  <v-container fluid>
    <v-row>
      <v-col style="max-width: fit-content;">
        <v-card>
          <ProfileNavigation v-on:mini="miniProp = $event"  v-on:isProfileCardActiveProp="isProfileCardActive = $event" />
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <ProfileCard
            v-if="isProfileCardActive == true"
            :userInfo="userInfo"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import ProfileNavigation from "../components/ProfileNavigation.vue";
export default {
  components: {
    ProfileCard,
    ProfileNavigation,
  },
  data() {
    return {
      isProfileCardActive: true,
      mini: false,
      userInfo: {
        id: 1,
        title: "Ünvan",
        fullName: "İsim Soyisim",
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
