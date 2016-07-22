<template>
     <div class="page--intro flex align-left align-middle" v-if="show">
        <h1 class="text--tilted">{{{data.title.rendered}}}</h1>
    </div>
    <div class="work--row row">
        <div class="col-xs-12 work--wrapper flex flow-vertical margin-auto text-center align-middle align-center" v-for="sub in data.sub_pages" v-bind:style="{background: sub.custom_fields.position_color }">
          <h3 class="text--tilted">{{sub.custom_fields.position_title}}</h3>
          <h2 class="text--tilted">{{sub.post_title}}</h2>
          <div class="masked--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.position_image + ')' }"></div>
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
      data: [],
      show: false
    }
  },
  head: {
    title: {
      inner: 'Jobba här'
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/41').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        // console.log(response.data)
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
    // this.getPageData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
