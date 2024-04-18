import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'

// Hacer que jQuery y Popper.js estén disponibles globalmente
window.$ = jQuery
window.jQuery = jQuery
window.Popper = Popper

// Configurar Vue
createApp(App).mount('#app')
