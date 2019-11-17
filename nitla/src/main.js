import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from "portal-vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import PlanearViaje from "./components/PlanearViaje";
import RastrearRuta from "./components/RastrearRuta";
import Co2 from "./components/Co2";

Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/planearviaje", component: PlanearViaje },
    { path: "/rastrearruta", component: RastrearRuta },
    { path: "/", component: Home },
    { path: "/co2", component: Co2 }
  ],
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({ router, render: h => h(App) }).$mount("#app");
