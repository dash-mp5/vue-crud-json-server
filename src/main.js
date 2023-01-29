import Vue from 'vue'
import App from './App.vue'
// we import the vue router from our router/index.js file
import router from './router'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  // we tell our vue instance to use this vue router
  router,

  vuetify,
  render: h => h(App)
}).$mount('#app')