import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'
import FastClick from 'fastclick'
import 'vue-lazyload-img'
import animatedScrollTo from 'animated-scrollto'

require('./components/Styles/Style.vue')

console.log('Välkommen till Dobus! Kul att ha dig här. Är du sugen på att jobba med oss? I så fall tycker vi att du ska skriva till oss eller läsa mer om positioner vi söker här http://stage.labb.dobus.se/work')
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
  '/blogg': {
    name: 'blogg',
    component: require('./components/Blogg/Blogg.vue'),
    subRoutes: {
      '/:name': {
        name: 'post_by_id',
        component: require('./components/Blogg/Detail.vue')
      }
    }
  }
})
router.beforeEach(function (transition) {
  if (transition.to.name === 'project_by_name') {
    transition.next()
  } else if (transition.from.name === 'project_by_name') {
    if (transition.to.name === 'project') {
      transition.next()
    } else {
      animatedScrollTo(
        document.body,
        0,
        500,
        function () {
          // window.scrollTo(0, 0)
        }
      )
      transition.next()
    }
  } else {
    animatedScrollTo(
      document.body,
      0,
      500,
      function () {
        // window.scrollTo(0, 0)
        // transition.next()
      }
    )
    transition.next()
  }
})

router.redirect({
  '*': '/'
})
router.start(App, 'app')
