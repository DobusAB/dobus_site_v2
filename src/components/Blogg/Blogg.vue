<template>
   <div class="page--intro flex align-left align-middle" v-if="show">
      <h1 class="text--tilted">{{{data.title.rendered}}}</h1>
   </div>
   <single :item="items"></single>
<router-view></router-view>
</template>
<script>
import Init from '../Partials/Init'
import Loading from '../Partials/Loading'
import Single from './Single_item.vue'
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
      items: [],
      yoast: {
        description: '',
        title: '',
        keywords: ''
      },
      featured: [],
      featuredRandom: [],
      hidden: false
    }
  },
  components: {
    loading: Loading,
    single: Single
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/573').then((response) => {
        this.data = response.data
        this.yoast.description = response.data.yoast_meta.yoast_wpseo_metadesc
        this.yoast.title = response.data.yoast_meta.yoast_wpseo_title
        this.yoast.keywords = response.data.yoast_meta.yoast_wpseo_focuskw
        this.getFeatured(transition)
      },
      (response) => {})
    },
    getFeatured: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts').then((response) => {
        // this.items = response.data
        this.$root.global.loading = false
        this.show = true
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
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
