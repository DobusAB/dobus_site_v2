
<template>
  <div class="page--intro flow-vertical flex align-left ">
      <h1>{{data.title.rendered}}</h1>
      <p>{{{data.content.rendered}}}</p>
  </div>
  <div v-if="data.content">
  <projects :project="data.sub_pages"></projects>
  </div>
 <router-view></router-view>
</template>

<script>
import Init from '../Partials/Init'
import Projects from '../Project/Partials/Project'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: []
    }
  },
  components: {
    projects: Projects
  },
  methods: {
    getProject: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/2').then((response) => {
        this.data = response.data
        console.log(response.data)
      },
      (response) => {})
    }
  },
  route: {
    activate: function (transition) {
      transition.next(transition)
    }
  },
  ready: function () {
    this.getProject()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
