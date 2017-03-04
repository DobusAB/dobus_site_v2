<template>
   <div class="page--intro flex align-left align-middle" v-if="show">
        <h1 v-bind:class="{'fadeIn' : this.$root.global.loading}">{{data.title.rendered}}</h1>
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
      data: [],
      show: false
    }
  },
  head: {
    title: {
      inner: 'Såhär jobbar vi'
    }
  },
  components: {
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'wp-json/wp/v2/pages/39').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        transition.next()
      },
      (response) => {})
    }
  },
  route: {
    activate: function (transition) {
      this.getPageData(transition)
    },
    deactivate: function (transition) {
      this.$root.global.loading = true
      setTimeout(function () {
        transition.next(transition)
      }, 250)
    }
  },
  ready: function () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
