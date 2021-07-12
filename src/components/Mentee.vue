<template>
  <div>
    <v-expansion-panels popout>
      <v-expansion-panel v-for="(profile, i) in profiles" :key="i" hide-actions>
        <v-expansion-panel-header>
          <v-row
            for
            align="center"
            class="spacer"
            no-gutters
            justify="space-between"
          >
            <v-col :cols="1" class="mr-4">
              <v-badge
                bordered
                bottom
                :color="`${
                  profile.status == 'Online' ? 'green' : 'grey lighten-1'
                }`"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar size="36px">
                  <img
                    v-if="profile.avatar"
                    alt="Avatar"
                    :src="profile.avatar"
                  />
                  <v-icon
                    v-else
                    :color="profile.color"
                    v-text="profile.icon"
                  ></v-icon>
                </v-avatar>
              </v-badge>
            </v-col>

            <v-col :cols="4" :xs="4" :sm="4" :md="4" :lg="3" class="ml-2">
              <strong v-html="profile.name" class="mr-2"></strong>
              <v-chip
                class="mr-2 hidden-xs-only"
                :color="`${
                  profile.status == 'Online' ? 'green' : 'grey lighten-1'
                }`"
                label
                small
                dark
                >{{ profile.status }}
              </v-chip>
            </v-col>

            <v-col
              :cols="2"
              :lg="2"
              :md="3"
              class="text-no-wrap hidden-xs-only mr-2"
            >
              <strong v-html="profile.title"></strong>
            </v-col>

            <v-col
              :lg="4"
              :md="4"
              v-if="profile.excerpt"
              class="
                grey--text
                text-truncate
                hidden-sm-and-down hidden-md-and-down
              "
            >
              &mdash;
              {{ profile.excerpt }}
            </v-col>

            <v-col class="d-flex text-no-wrap justify-end mr-2">
              <v-chip
                v-if="profile.message"
                :color="`${profile.color} lighten-4`"
                class="ml-0 mr-0 black--text"
                label
                small
              >
                {{ profile.message }} Yeni Mesaj
              </v-chip>
            </v-col>
          </v-row>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-divider></v-divider>
          <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      color: "grey",
      profiles: [
        {
          avatar: "https://i.pravatar.cc/150?img=12",
          name: "Burak Yılmaz",
          title: "Öğrenci",
          excerpt: "Frontend konusunda kendimi geliştirmek istiyorum.",
          status: "Online",
        },
        {
          avatar: "https://i.pravatar.cc/150?img=8",
          name: "Mehmet Akıncı",
          title: "Frontend Developer",
          color: "#54A1E0",
          message: 1,
          total: 3,
          status: "Offline",
          excerpt:
            "Vue.js ve React Frameworkleri konusunda uzmanlaşmak istiyorum.",
        },
        {
          avatar: "https://i.pravatar.cc/150?img=16",
          name: "Seda Sayar",
          message: 2,
          total: 4,
          title: "Backend Developer",
          excerpt: "Python ile daha iyi kod yazmak istiyorum.",
          status: "Offline",
        },
      ],
      lorem:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    };
  },
  computed: {
    statusColor(status) {
      console.log(status);
      if (status == "Online") {
        return "green";
      }
      return "grey";
    },
  },
};
</script>

<style>
.green {
  color: green;
}
</style>
