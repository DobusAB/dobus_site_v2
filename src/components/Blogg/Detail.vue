<template>
<div class="project-container" transition="expand" style="background:red;">
  <div class="row">
    <div class="col-xs-12 landing--intro margin-auto text-center flex align-middle">
      <h1 class="text--tilted" v-bind:class="{'fadeIn' : this.$root.global.loading}" v-if="data.title">{{{ data.title.rendered }}}</h1>
    </div>
  </div>
</div>
</template>

<script>
import Init from '../Partials/Init'
import Loading from '../Partials/Loading'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World',
      show: false,
      data: [],
      posts: [],
      yoast: {
        description: '',
        title: '',
        keywords: ''
      }
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPost: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts/575').then((response) => {
        this.data = response.data
        this.$root.global.loading = false
        this.show = true
        transition.next(transition)
      },
			(response) => {})
    }
  },
  route: {
    activate: function (transition) {
      this.getPost(transition)
    },
    deactivate: function (transition) {
      this.$root.global.loading = true
      setTimeout(function () {
        transition.next(transition)
      }, 250)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
