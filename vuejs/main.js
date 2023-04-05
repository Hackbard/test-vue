import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HelloWorld from './pages/HelloWorld.vue'

//import './assets/main.css'

const helloWorld = createApp(HelloWorld)

helloWorld.use(createPinia())

helloWorld.mount('#helloWorld')
