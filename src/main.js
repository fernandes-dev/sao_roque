import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueYoutube from 'vue-youtube-embed'

Vue.config.productionTip = false

Vue.use(VueYoutube, {global: true})

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app');
