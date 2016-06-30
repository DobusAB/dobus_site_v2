<template>
    <div class="landing-container flex align-center align-middle">
       <h1 v-if="data.title">{{ data.title.rendered }}</h1>
    </div>
</template>

<script>
import Init from '../Partials/Init'
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
  methods: {
    getPageData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/37').then((response) => {
        this.data = response.data
        console.log(response.data)
      },
      (response) => {})
    }
  },
  route: {
    activate: function (transition) {
      console.log('hook-example activated!')
      transition.next(transition)
    },
    canReuse: true
  },
  ready: function () {
    this.getPageData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
