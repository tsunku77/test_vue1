import Vue from "vue"
import App from "./App.vue"
import { store } from "./store/store"
import VueMoment from 'vue-moment'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMoment)
Vue.use(BootstrapVue)
Vue.config.productionTop = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
