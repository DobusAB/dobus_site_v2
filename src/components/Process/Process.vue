<template>
    <loading :show.sync="show"></loading>
     <div class="page--intro flow-vertical flex align-left" v-if="data.title">
        <h1>{{data.title.rendered}}</h1>
        <p>{{{data.content.rendered}}}</p>
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
      data: [],
      show: false
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPageData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/39').then((response) => {
        this.data = response.data
        this.show = true
      },
      (response) => {})
    }
  },
  ready: function () {
    this.getPageData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
