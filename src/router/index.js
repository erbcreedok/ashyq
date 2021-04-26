import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Image from "../views/Image.vue";
import QrScanner from "../views/QrScanner.vue";
import Info from "@/views/Info";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/image:id",
    component: Image,
  },
  {
    path: "/image",
    redirect: "/image1",
  },
  {
    path: "/qr",
    component: QrScanner,
  },
  {
    path: "/info",
    component: Info,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
