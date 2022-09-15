import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";

createApp(App).use(router).mount("#app");
