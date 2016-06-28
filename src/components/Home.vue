<template>
    <h1>{{ data.title.rendered }}</h1>
</template>

<script>
import Projects from './Home/Projects/Project'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World',
      data: []
    }
  },
  components: {
    projects: Projects
  },
  route: {
    activate: function (transition) {
      console.log('hook-example activated!')
      transition.next(transition)
    },
    canReuse: true
  },
  ready: function () {
    this.$http.get('http://127.0.0.1/index.php/wp-json/wp/v2/pages/2').then((response) => {
      this.data = response.data
      console.log(response.data)
    },
    (response) => {})
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
