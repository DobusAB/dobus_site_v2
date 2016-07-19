import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'
import FastClick from 'fastclick'
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

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
// Vue.use(Fastclick)
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
router.afterEach(function (transition) {
  if (transition.to.name === 'project_by_name' || transition.to.name === 'project') {
    // transition.next()
  } else {
    window.scrollTo(0, 0)
    // transition.next()
  }
})

router.redirect({
  '*': '/'
})
router.start(App, 'app')
