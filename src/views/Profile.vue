<template>
  <div class="">
    <div class="row" style="height:90vh;">
      <div class="col-md-3" style="padding:15px">
        <div class="profile-card">
          <div class="avatar-wrapper">
            <div class="avatar"></div>
            <div class="title-text">{{ userInfo.title }}</div>
            <div class="name-text">{{ userInfo.fullName }}</div>
            <div class="description-text">{{ userInfo.description }}</div>
            <div class="social-wrapper">
              <div
                v-for="(item, index) in userInfo.social"
                :key="index"
                class="social-text"
              >
                <span> {{ item.key }} </span> {{ item.value }}
              </div>
            </div>
            <hr style="width:100%; margin:35px 0px" />
            <div class="skills">
              <div class="skills-text">Yetenekler</div>
              <ul class="skill-list">
                <li
                  v-for="(item, index) in userInfo.skills"
                  :key="index"
                  class="skill-list-item"
                >
                  <span class="skill-list-item-text">
                    {{ item.name }}
                  </span>
                  <span class="skill-list-item-badge">{{ item.rate }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9" style="padding:15px">
        <div class="row">
          <div
            v-for="(item, index) in userInfo.bestSkills"
            :key="index"
            class="col-md-4"
          >
            <div class="best-skill-card">
              <div class="best-skill-avatar"></div>
              <div class="best-skill-desc">
                <div class="best-skill-item-title">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="experience-skill-card">
              <div class="best-skill-item-title">
                İş Deneyimi
              </div>
              <div class="experience-wrapper">
                <div class="experience-group">
                  <div class="experience-title">Posizyon</div>
                  <div class="experience-text">Posizyon tanımı</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">Firma Sektörü</div>
                  <div class="experience-text">Firmanızın Sektörü</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">İş Tanımı</div>
                  <div class="experience-text">Yaptıgınız işin kısa tanımı</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">Deneyim süresi</div>
                  <div class="experience-text">1 yıl</div>
                </div>
              </div>
              <div class="experience-wrapper">
                <div class="experience-group">
                  <div class="experience-title">Posizyon</div>
                  <div class="experience-text">Posizyon tanımı</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">Firma Sektörü</div>
                  <div class="experience-text">Firmanızın Sektörü</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">İş Tanımı</div>
                  <div class="experience-text">Yaptıgınız işin kısa tanımı</div>
                </div>
                <div class="experience-group">
                  <div class="experience-title">Deneyim süresi</div>
                  <div class="experience-text">1 yıl</div>
                </div>
              </div>
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
      userInfo: {
        id: 1,
        title: "Ünvan",
        fullName: "İsim Soyisim",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedtincidunt justo tristique velit lacinia euismod. Donec accumsan ante mi. Sed iaculis purus at scelerisque iaculis. Suspendisse potenti.",
        social: [
          { key: "Github", value: "http://localhost:8080/" },
          { key: "Linkedn", value: "http://localhost:3000/" },
        ],
        skills: [
          { name: "Vue", rate: "Good" },
          { name: "React", rate: "Good" },
          { name: "React Native", rate: "Good" },
          { name: "Angular", rate: "Good" },
          { name: ".NET MVC", rate: "Good" },
        ],
        bestSkills: [{ name: "Vue" }, { name: "React" }, { name: "Angular" }],
      },
    };
  },
};
</script>

<style scoped>
.experience-group {
  margin-bottom: 15px;
}
.experience-wrapper {
  margin: 30px 0px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 3px;
}
.experience-title {
  font-size: 16px;
  color: #999;
  display: block;
  line-height: 12px;
}
.experience-text {
  font-family: Rubik-Medium;
  font-weight: 400;
  font-size: 22px;
  color: #333;
  word-wrap: break-word;
  display: block;
}
.best-skill-desc {
  margin: 0px 15px;
}
.best-skill-item-title {
  font-size: 34px;
}
.social-text span {
  width: 150px;
  font-weight: 600;
}
.social-wrapper {
  margin-top: 15px;
  text-align: left;
  width: 100%;
  padding: 0px 30px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
}
.skill-list-item-badge {
  background-color: green;
  border-radius: 10px;
  padding: 5px 15px;
  color: #fff;
  height: fit-content;
}
.skills {
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.6);
}
.skill-text {
  width: fit-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
.skill-list {
  text-align: left;
  list-style: none;
  padding: 0;
}
.skill-list-item {
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  padding: 10px 10px 10px 10px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skill-list-item-text {
  display: flex;
  align-items: center;
}
.title-text {
  margin-top: 15px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  padding: 0px 30px;
}
.description-text {
  margin-top: 15px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px 30px;
}
.name-text {
  padding: 0px 30px;

  margin-top: 10px;
  font-size: 34px;
  color: rgba(0, 0, 0, 0.7);
}
.profile-card {
  background-color: #fff;
  box-shadow: 1px 1px 3px 0px grey;
  border-radius: 15px;
  padding: 15px;
  height: 80vh;
  overflow: auto;
}
.best-skill-card {
  background-color: #fff;
  box-shadow: 1px 1px 3px 0px grey;
  border-radius: 15px;
  padding: 15px;
  height: 10vh;
  overflow: auto;
  display: flex;
  align-items: center;
}
.experience-skill-card {
  background-color: #fff;
  box-shadow: 1px 1px 3px 0px grey;
  border-radius: 15px;
  padding: 15px;
  height: 65vh;
  overflow: auto;
}
.avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.avatar {
  height: 100px;
  width: 100px;
  background-color: grey;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 0px rgb(187, 186, 186);
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.best-skill-avatar {
  height: 70px;
  width: 70px;
  background-color: grey;
  box-shadow: 1px 1px 5px 0px rgb(187, 186, 186);
  border: 2px solid rgba(0, 0, 0, 0.2);
}
</style>
