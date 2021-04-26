import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import VueCountdownTimer from "vuejs-countdown-timer";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueCountdownTimer);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
