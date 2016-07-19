<template>
  <div>
    <div class="page--intro flex align-left align-middle">
        <h1 v-bind:class="{'fadeIn' : this.$root.global.loading}">{{data.title.rendered}}</h1>
    </div>
    <projects :project="data.sub_pages"></projects>
  </div>
 <router-view></router-view>
</template>

<script>
import Init from '../Partials/Init'
import Projects from '../Project/Partials/Project'
import Loading from '../Partials/Loading'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: [],
      show: false
    }
  },
  components: {
    projects: Projects,
    loading: Loading
  },
  methods: {
    getProject: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/2').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        transition.next()
      },
      (response) => {})
    }
  },
  route: {
    data: function (transition) {
      // this.getProject()
      // this.getProject(transition)
      // transition.next()
    },
    activate: function (transition) {
      this.getProject(transition)
    },
    deactivate: function (transition) {
      this.$root.global.loading = true
      setTimeout(function () {
        transition.next(transition)
      }, 250)
    }
  },
  ready: function () {
    // this.getProject()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
