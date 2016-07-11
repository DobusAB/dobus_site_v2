<template>
	<div class="loading--container flex align-center align-middle" v-bind:class="{ 'leave': show}">
      	<h3 style="color:#000;">Loading data ... </h3>
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
      moreProjects: [],
      currentProjectIndex: 0
    }
  },
  props: {
    show: ''
  },
  ready: function () {
    console.log(this.show)
  }
}
</script>