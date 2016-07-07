<template>
  <div class="container" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}">
    <menu></menu>
      <router-view></router-view>
    <sidfot></sidfot>
  </div>
</template>

<script>
import Menu from './components/Partials/Menu'
import Footer from './components/Partials/Footer'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'About',
      global: {
        projectOpen: false
      }
    }
  },
  components: {
    menu: Menu,
    sidfot: Footer
  },
  ready: function () {}
}

</script>


