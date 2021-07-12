<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        @click="redirectToHome()"
        alt="Devnot mentor logo"
        class="shrink mr-2 pointer"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="200"
      />
    </div>

    <v-spacer></v-spacer>
    <div v-if="isLoggedIn">
      <v-menu
        :close-on-content-click="false"
        left
        origin="left"
        class="ma-0"
        nudge-bottom="35"
      >
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom light nudge-bottom="10">
            <template v-slot:activator="{ on: tooltip }">
              <v-badge right color="amber darken-3" overlap class="mr-4">
                <span slot="badge" v-if="notificationsCount != 0">{{
                  notificationsCount
                }}</span>
                <!-- <v-icon dark v-on="{ ...tooltip, ...menu }"
                  >mdi-message-processing</v-icon
                > -->
                <v-icon dark normal v-on="{ ...tooltip, ...menu }"
                  >mdi-bell-outline</v-icon
                >
              </v-badge>
            </template>

            <span style="font-size: 12px">Bildirimler</span>
          </v-tooltip>
        </template>

        <v-card max-height="600">
          <v-app-bar dark flat color="amber darken-3">
            <v-toolbar-title>Bildirimler</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-bell-outline</v-icon>
          </v-app-bar>

          <div v-if="notificationsCount == 0">
            <v-simple-table height="60" class="pt-4 pl-2 pr-2">
              <template slot="default">
                <tbody>
                  <tr>
                    <td
                      class="grey--text text--darken-2"
                      align="center"
                      width="200"
                    >
                      Yeni bildiriminiz yok
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <div v-else>
            <v-simple-table class="grey lighten-5">
              <template v-slot:default>
                <tbody>
                  <tr
                    v-for="item in notifications"
                    :key="item.id"
                    class="grey--text text--darken-2"
                  >
                    <td>
                      <v-icon color="grey darken-1"
                        >mdi-message-processing-outline</v-icon
                      >
                    </td>
                    <td class="grey--text text--darken-2">
                      <router-link class="custom" to="/mesajlar" name="mesaj">{{
                        item.description
                      }}</router-link>
                    </td>
                    <td class="pl-0 pr-0">
                      <v-menu
                        v-model="menu"
                        offset-y
                        class="ma"
                        nudge-bottom="10"
                      >
                        <template #activator="{ on }">
                          <v-btn text icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list min-width="250">
                          <v-list-item @click="deleteNotification(item)">
                            <v-list-item-title>Bildirimi Sil</v-list-item-title>
                            <v-icon color="grey darken-1"
                              >mdi-trash-can-outline</v-icon
                            >
                          </v-list-item>

                          <v-list-item @click="deleteAll()">
                            <v-list-item-title
                              >Bütün Bildirimleri Sil</v-list-item-title
                            >
                            <v-icon color="grey darken-1">mdi-trash-can</v-icon>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card>
      </v-menu>

      <v-menu offset-y class="ma-0" nudge-bottom="10" max-width="220" right>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="pa-2">
            <v-avatar size="35" class="mr-2">
              <img src="https://i.pravatar.cc/150?img=9" />
            </v-avatar>
            <span
              v-if="sessionUser"
              style="text-transform: none !important; color: #ffffff"
              >{{ sessionUsername }}</span
            >
            <v-icon right color="white">mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list color="grey--text">
          <v-list-item two-line>
            <v-list-item-avatar width="60" height="60" class="mb-2">
              <img src="https://i.pravatar.cc/150?img=9" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-subtitle>Hoşgeldin</v-list-item-subtitle>
              <v-list-item-subtitle>Merve</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item to="/Profile" style="text-decoration: none">
            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-subtitle>Kontrol Paneli</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/settings" style="text-decoration: none">
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-subtitle>Ayarlar</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item href="/api-auth/logout/" style="text-decoration: none">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-subtitle>Çıkış</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
      username: null,
      sessionUser: true,
      isLoggedIn: true,
      sessionUsername: "Merve",
      notificationsCount: 3,
      notifications: [
        {
          id: 1,
          description: "Özgür size bir mesaj gönderdi",
        },
        {
          id: 2,
          description: "Uğur size bir mesaj gönderdi",
        },
      ],
    };
  },
  created() {
    if (window.localStorage.getItem("user-profile")) {
      this.username = JSON.parse(
        window.localStorage.getItem("user-profile")
      ).name;
      this.showLogin = false;
    }
  },
  methods: {
    redirectToHome() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    deleteNotification(item) {
      console.log(`Mesaj ${item} silindi`);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.custom:hover,
.custom:-webkit-any-link {
  text-decoration: none !important;
  cursor: pointer;
  color: #626262;
}
</style>
