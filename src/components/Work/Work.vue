<template>
    <h1 v-if="data.title">{{ data.title.rendered }}</h1>
</template>

<script>
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
      this.$http.get('http://127.0.0.1/index.php/wp-json/wp/v2/pages/41').then((response) => {
        this.data = response.data
        console.log(response.data)
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
