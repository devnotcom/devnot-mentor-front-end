<template>
  <v-container
    fluid
    style="height: 100%; background-size: cover; padding:0px 50px"
    :style="{
      'background-image':
        'url(' + require('../assets/img/background.png') + ')',
    }"
  >
    <v-row style="height: 100%;align-items: center;">
      <v-col :md="3">
        <v-row v-for="(item, index) in cardData" :key="index">
          <v-col :md="12">
            <v-btn
              @click="setActive(item.id)"
              rounded
              color="primary"
              block
              :outlined="active == item.id ? false : true"
              :elevation="active == item.id ? '20' : '2'"
              x-large
              style="height: 80px; transition: all 0.5s ease"
            >
              {{ item.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col :md="9">
        <v-row
          style="padding: 0px 100px;"
          v-for="(item, index) in cardData"
          :key="index"
        >
          <v-col
            v-if="active == item.id"
            :md="6"
            style="display: flex;align-content: center;flex-wrap: wrap;"
          >
            <div class="display-4 font-weight-bold">
              {{ item.title }}
            </div>
            <div class="text-h5 mt-5">
              {{ item.body }}
            </div>
            <div class="mt-5">
              <v-btn elevation="4" rounded color="secondary">
                Daha Fazla
              </v-btn>
            </div>
          </v-col>
          <v-col  v-if="active == item.id" :md="6">
            <v-img :src="require(`@/assets/img/${item.img}`)"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 1,
      cardData: [
        {
          id: 1,
          title: "Sistem Nasıl Çalışıyor",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium dui et eros mollis viverra. In accumsan ipsum pretium pulvinar venenatis.",
          img: "1.png",
        },
        {
          id: 2,
          title: "Mentorluk Yapabilirim",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium dui et eros mollis viverra.",
          img: "2.png",
        },
        {
          id: 3,
          title: "Mentor Arıyorum",
          body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          img: "3.png",
        },
      ],
    };
  },
  methods: {
    setActive(param) {
      this.active = param;
    },
  },
};
</script>
