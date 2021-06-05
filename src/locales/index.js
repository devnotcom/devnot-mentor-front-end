import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "./en/index";
import tr from "./tr/index";

Vue.use(VueI18n);

const messages = {
  en: en,
  tr: tr,
};

export default new VueI18n({
  locale: "tr", // set locale
  messages, // set locale messages
});