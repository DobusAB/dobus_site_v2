import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'
import 'vue-lazyload-img'

require('./components/Styles/Style.vue')
require('./components/Styles/Sally.vue')

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vue.lazyimg, {
  fade: true,
  nohori: true,
  speed: 20
})
/* eslint-disable no-new */
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    name: 'start',
    component: require('./components/Home/Home.vue')
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
  },
  '/work': {
    name: 'work',
    component: require('./components/Work/Work.vue')
  },
  '/process': {
    name: 'process',
    component: require('./components/Process/Process.vue')
  }
})
/* router.afterEach(function () {
  window.before(0, 0)
}) */
router.start(App, 'app')
