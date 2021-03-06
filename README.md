<p align="center">
<img height="300" src="https://user-images.githubusercontent.com/43035417/122687424-17337700-d21f-11eb-9d6b-26000d720291.jpg">
</p>



# Devnot Nedir?

Güncel yazılım konularıyla ilgili yazılar yayınlayan, yazılım konferansları, buluşmalar ve kamplar düzenleyen yazılım geliştirici topluluğudur.



# Devnot Mentor Projesi Nedir?

Yazılım alanında kendini geliştirmek isteyen öğrencilerin(mentilerin) kendilerinden daha tecrübeli yazılımcılar(mentorlar) bulmalarını, onlarla tanışmalarını ve düzenli görüşmeler yapmalarını sağlayacak açık kaynak kod bir topluluk projesidir.



Yazılımcı olmayı veya mesleğinde daha iyi noktalara gelmeyi hedefleyen kişileri(öğrenci) bu program kapsamında bir mentorle eşleştirerek düzenli görüşmeler yapmalarını amaçlamaktayız. Bu görüşmelerde öğrenciler mentorlerine sorular sorabilecek, çözmekte zorlandıkları konularda yardım isteyebilecek, gelişimleri için uygun kaynak önerilerini dinleyebilecekler.




# Başlarken

devnot-mentor-front-end projesini çalıştırabilmek için bilgisayarınıza [Node.js](https://nodejs.org/) yüklemelisiniz.

Bağımlılıkları yükleme ve dev ortamı üzerinde çalıştırma.

```sh
$ cd devnot-mentor-frontend
$ npm install
$ npm run dev
```

Prod veya staging ortamında çalıştırmak için...

```sh
$ npm run staging
$ npm run production
```

Tüm ortamlarda build ve minify işlemleri.
```sh
$ npm run build-dev
$ npm run build-staging
$ npm run build-production
```

# Paketler

devnot-mentor-front-end bir dizi açık kaynak projesi kullanır;

* [VueJS](https://vuejs.org/) - Kullanıcı arayüzlerini oluşturduğumuz framework.
* [Vuetify](https://vuetifyjs.com/) - Material Componentlere sahip bir Vue UI kütüphanesidir.
* [Axios](https://github.com/imcvampire/vue-axios) - HTTP istekleri (GET , POST , PUT , DELETE) için kullanılan kütüphane.
* [Vuex](https://vuex.vuejs.org/) - Vuex kütüphanesi ile state yönetimi.
* [i18n](https://kazupon.github.io/vue-i18n/) - Çoklu dil desteği kütüphanesi
* [FontAwesome](https://github.com/FortAwesome/vue-fontawesome) - Vektör ikonlar

# Dökümantasyon

### Mimari

📁 Assets - Fotoğraf ve stillerimizi sakladığımız klasör

📁 Services - JWT yada API servislerini tanımladığımız klasör

📁 Components - Sayfa bileşenlerinin bulunduğu klasör(Appbar, Sidebar, Cards etc.).

📁 Entities - Form elemanları için tanımlanan entitiler.

📁 Plugins - Fontawesome Vuetify gibi eklentilerin yönetildiği klasör

📁 Layout - Sayfa yerleşimleri.

📁 Locales - Çoklu dil desteği

📁 Router - Projede kullanılacak routeların tanımlamaları.

📁 Store - Store yönetimi

📁 Views - Bunu zaten biliyorsun.

### Routing, layout ve views

Sayfalarımızı doğrudan App.vue'ye göndermek yerine bir ara katman oluşturduk. Böylece Vue sayfalarımız için farklı içerik yer tutucularını tanımlayabiliriz. Kullanımı gerçekten çok kolay. Öğreneceksiniz.

##### - Layout

Layout bir vue sayfasıdır. İçerik yer tutucunuzu oluşturabilirsiniz.

```html
<v-app>
  <v-app-bar app></v-app-bar>
  <v-main>
    <v-container>
       <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
```

##### - Route tanımlamaları

**/router/modules** içerinde bir modül oluşturun . 

```javascript
import Layout from "@/layout/index.vue";
const base = {
  path: "/View",
  name: "View",
  component: Layout,
  children: [
    {
      path: "/",
      name: "",
      component: () => import("@/views/base/View"),
    },
  ],
};
export default base;
```

Layoutunuzu /layout klasöründen **Import** edin.  Kök route tanımlayın ve layoutunuzu component olarak ekleyin. Children dizininin içerisindeki componentler sayfalarınız olmalı.

Modüllerinizi **index.js** içerisinde import edin.

```javascript
import base from "@/router/modules/base";
const routes = [
  base
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

```

### State Yönetimi

Vuex, Vue.js uygulamaları için bir durum yönetimi modeli/kitaplığıdır. action.type ve mutasyons.type öğelerinizi store klasöründe bir **MAGIC STRING** olarak tanımlayın.

**actions.tpye.js** içerisinde

```javascript
//#region Base
export const BASE_GET_METHOD = "baseGetMethod";
export const BASE_POST_METHOD = "basePostMethod";
export const BASE_PUT_METHOD = "basePutMethod";
export const BASE_DELETE_METHOD = "baseDeleteMethod";
//#endregion

```

**mutations.type.js** içerisinde

```javascript
//#region Base
export const BASE_SET_METHOD = "baseSetMethod";
//#endregion
```

**modules** klasöründe yeni bir modül tanımlayın. Api servisini, action ve mutation tanımlamalarınızı import edin.

```javascript
import apiService from "@/services/api.service";
import { BASE_GET_METHOD,} from "@/store/actions.type";
import { BASE_SET_METHOD } from "@/store/mutations.type";
```

**actions** sabitini tanımlayın.

```javascript
const actions = {
  [BASE_GET_METHOD](context) {
    return new Promise((resolve, reject) => {
      apiService.get("/users")
        .then((response) => {
          context.commit(BASE_SET_METHOD, response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });

    });
  }
}
```

API'den bir data döndüğünde mutation'a commit atın.

```javascript
const mutations = {
  [BASE_SET_METHOD](state, payload) {
    state.data = payload.data;
  },
};
```

**state** ve **getters** sabitlerini tanımlayın

```javascript
const state = {
  data: [],
};
const getters = {
  getData: (state) => {
    return state.data;
  },
};
```

