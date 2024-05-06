import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle, faArrowLeft, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faArrowDown)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')