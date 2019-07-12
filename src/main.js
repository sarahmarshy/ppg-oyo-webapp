import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import SubmitData from './components/SubmitData.vue'
import Vue from 'vue'
import VueResource from 'vue-resource' // Provides HTTP request functionality
import VueRouter from 'vue-router' // Provides Single-Page Application style routing

// eslint-disable-next-line sort-imports
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/submitData',
    component: SubmitData
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueResource)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#App',
  router,
  data: {},
  render(createElement) {
    return createElement(App)
  }
})
