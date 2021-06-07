import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-brands-svg-icons";
import { } from "@fortawesome/free-solid-svg-icons";

export function FontawesomeServe(Vue) {
  Vue.component("faIcon", FontAwesomeIcon);
  library.add(faUserSecret)
}