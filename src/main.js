import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import "@/assets/scss/custom-bootstarap.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';"@fortawesome/free-brand-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas,fab);


createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')