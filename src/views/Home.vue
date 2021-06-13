<template>
  <div class="home">
    <div class="row content">
      <div class="col-md-3 operation-wrapper">
        <button
          v-for="(item, index) in cardData"
          :key="index"
          class="btn select-active-button"
          @click="setActive(item.id)"
        >
          {{ item.title }}
        </button>
      </div>
      <div class="col-md-9 content-wrapper">
        <div v-for="(item, index) in cardData" :key="index">
          <div
            class="row content-holder"
            style="width:100%"
            v-if="active == item.id"
          >
            <div class="col-md-4" style="padding:0px 30px">
              <h1>{{ item.title }}</h1>
              <p>{{ item.body }}</p>
              <button class="btn">Daha Fazlası</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      cardData: [
        {
          id: 1,
          title: "Sistem Nasıl Çalışıyor",
          body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          title: "Mentorluk Yapabilirim",
          body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          title: "Mentor Arıyorum",
          body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
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

<style scoped>
.content-holder {
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    320deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  min-height: 45vh;
  border-radius: 15px;
}
.content {
  align-items: center;
  height: 90vh;
}
.content-wrapper {
  height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
.operation-wrapper {
  height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0px 30px;
  flex-flow: wrap;
  align-content: center;
  flex-flow: column;
}
.operation-wrapper > button {
  margin: 15px 0px;
  width: 300px;
}
.btn {
  min-width: 80px;
  min-height: 40px;
  border: none;
  box-shadow: 1px 0px 5px 0px grey;
  border-radius: 15px;
  background: none;
  cursor: pointer;
}
.select-active-button {
  min-height: 60px;
}
.btn-block {
  width: 100%;
}
</style>
