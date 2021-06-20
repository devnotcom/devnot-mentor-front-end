<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/50195250/122681498-3a4d2f00-d1fd-11eb-9dac-14d84fc568e0.png">
</p>

# Getting Started

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

# Contents

devnot-mentor-front-end bir dizi açık kaynak projesi kullanır;

* [VueJS](https://vuejs.org/) - Kullanıcı arayüzlerini oluşturduğumuz framework.
* [Vuetify](https://vuetifyjs.com/) - Material Componentlere sahip bir Vue UI kütüphanesidir.
* [Axios](https://github.com/imcvampire/vue-axios) - HTTP istekleri (GET , POST , PUT , DELETE) için kullanılan kütüphane.
* [Vuex](https://vuex.vuejs.org/) - Vuex kütüphanesi ile state yönetimi.
* [i18n](https://kazupon.github.io/vue-i18n/) - Çoklu dil desteği kütüphanesi
* [FontAwesome](https://github.com/FortAwesome/vue-fontawesome) - Vektör ikonlar

# Documentation

### Architecture

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

### Routing, layout and views

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

##### - Describe Routes

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

### State Management

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



### Languages and technologies
