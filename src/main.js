import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

Vue.config.productionTip = false


require('./mock');
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

