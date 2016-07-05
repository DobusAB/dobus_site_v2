<template>
<div class="container">
<menu></menu>
  <router-view></router-view>
</div>
</template>

<script>
import Menu from './components/Partials/Menu'
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
    menu: Menu
  },
  ready: function () {}
}

</script>

<style>
