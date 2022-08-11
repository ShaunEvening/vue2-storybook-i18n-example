import Vue from 'vue'
import VueI18n from 'vue-i18n';
import App from './App.vue'
import { createi18nConfiguration } from './translations';

Vue.config.productionTip = false
Vue.use(VueI18n);

const i18n = createi18nConfiguration();

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
