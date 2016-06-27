<template>
  <div class="hello">
    <h1 v-if="data.title">{{ data.title.rendered }}</h1>
    <div v-if="data.content">
        {{{data.content.rendered}}}
    </div>
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
      msg: 'About',
      data: []
    }
  },
  router: {
    canReuse: true
  },
  ready: function () {
    this.$http.get('http://127.0.0.1/index.php/wp-json/wp/v2/pages/4').then((response) => {
      this.data = response.data
      console.log(response.data)
    },
    (response) => {})
  }
}
</script>