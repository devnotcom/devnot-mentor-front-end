import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { } from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-brands-svg-icons";
import { faFilter, faImages } from "@fortawesome/free-solid-svg-icons";

export function FontawesomeServe(Vue) {
  Vue.component("faIcon", FontAwesomeIcon);
  library.add(faFilter)
  library.add(faImages)
}