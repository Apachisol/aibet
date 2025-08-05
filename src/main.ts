import { createApp } from 'vue'
import App from './App.vue'
import './global.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap'
import router from './router'

createApp(App).use(router).mount('#app')