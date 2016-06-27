import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Style from '!css!sass!./components/Style.vue'
require('./components/Style.vue')
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Style)
/* eslint-disable no-new */
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    name: 'start',
    component: require('./components/Hello.vue')
  },
  '/about': {
    name: 'about',
    component: require('./components/About/About.vue')
  },
  '/projects': {
    name: 'project',
    component: require('./components/Project/Projects.vue'),
    subRoutes: {
      '/:name': {
        name: 'project_by_name',
        component: require('./components/Project/Detail.vue')
      }
    }
  }
})

router.start(App, 'app')
