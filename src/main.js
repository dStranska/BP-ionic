// import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import 'vue-ionicons/ionicons.css'

import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import router from './router'

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip=false;
Vue.use(Ionic)

new Vue({ el: '#app', router, render: h => h(App) }).$mount('#app');
