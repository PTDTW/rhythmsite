import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


import 'animate.css';
import { vueAnimateCss } from "animation-vue";

import AOS from 'aos';
import 'aos/dist/aos.css';


import Vue3Marquee from 'vue3-marquee'

import '@master/css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


// import { BootstrapIcon } from '@bootstrap-icons'

library.add(fas, far, fab)

const app = createApp(App)

app.use(router)
app.use(vueAnimateCss())
app.use(Vue3Marquee)
app.use(AOS.init())

app.component('font-awesome-icon', FontAwesomeIcon)
// app.component('bootstrap-icon', BootstrapIcon)

app.mount('#app')
