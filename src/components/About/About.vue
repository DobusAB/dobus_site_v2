<template>
   <div class="page--intro flow-vertical flex align-left ">
      <h1>{{data.title.rendered}}</h1>
      <p>{{{data.content.rendered}}}</p>
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
      msg: 'About',
      data: []
    }
  },
  router: {
    canReuse: true
  },
  ready: function () {
    this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/4').then((response) => {
      this.data = response.data
      console.log(response.data)
    },
    (response) => {})
  }
}
</script>