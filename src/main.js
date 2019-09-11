import Vue from 'vue';
import App from './App.vue';
import Home from '@/components/Home/Home';
import Wedding from '@/components/BigDay/Wedding';
import Accommodations from '@/components/Stay/Accommodations';
import Gift from '@/components/Gift';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/wedding', component: Wedding },
  { path: '/stay', component: Accommodations },
  { path: '/gift', component: Gift },
];
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
});

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

new Vue({
  router,

  render: h => h(App),
}).$mount('#app');
