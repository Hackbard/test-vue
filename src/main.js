import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

import './assets/main.css'

import { createElementInstance } from './customElementInstance'

const config = {
  component: App,
  sharedStoreInstance: false,
  plugins: [router, pinia]
}

const TolleApp = createElementInstance(config)

customElements.define('tolle-app', TolleApp)
