<template>
	<div class="loading--container flex align-center align-middle" v-bind:class="{'fadeIn' : show}">
    <div class="loading--inner"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: [],
      enter: false
    }
  },
  props: {
    show: false
  },
  ready: function () {}
}
</script>