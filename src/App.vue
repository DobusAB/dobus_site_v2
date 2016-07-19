<template>
  <div class="container" v-bind:class="{'nav--project_open': this.$root.global.projectOpen, 'fadeIn' : global.loading}">
    <menu></menu>
   <!-- <loading :show.sync="global.loading"></loading>-->
      <router-view></router-view>
  </div>
  <sidfot></sidfot>
</template>

<script>
import Menu from './components/Partials/Menu'
import Footer from './components/Partials/Footer'
import Loading from './components/Partials/Loading'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'About',
      global: {
        projectOpen: false,
        loading: true
      }
    }
  },
  components: {
    menu: Menu,
    sidfot: Footer,
    loading: Loading
  },
  ready: function () {}
}

</script>


