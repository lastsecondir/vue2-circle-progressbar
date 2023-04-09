import Vue from 'vue';
import App from './App.vue';
import CircleProgressbar from '../src/index';

Vue.use(CircleProgressbar);

new Vue({
  render: (h) => h(App),
}).$mount('#app');