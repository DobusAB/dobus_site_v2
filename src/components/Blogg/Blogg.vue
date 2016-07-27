<template>
<div class="landing--container" v-if="show">
  <div class="row">
    <div class="col-xs-12 landing--intro margin-auto text-center flex align-middle">
      <h1 class="text--tilted" v-bind:class="{'fadeIn' : this.$root.global.loading}">{{{ data.title.rendered }}}</h1>
    </div>
  </div>
</div>
 <div class="row" v-for="post in posts">
    <div class="col-md-12">
      <h1>{{post.title.rendered}}</h1>
      <h3>{{{post.content.rendered}}}</h3>
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
  head: {
    title: function () {
      return {
        inner: this.yoast.title
      }
    },
    meta: function () {
      return {
        name: {
          description: this.yoast.description,
          keywords: this.yoast.keywords
        }
      }
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/573').then((response) => {
        this.data = response.data
        this.yoast.description = response.data.yoast_meta.yoast_wpseo_metadesc
        this.yoast.title = response.data.yoast_meta.yoast_wpseo_title
        this.yoast.keywords = response.data.yoast_meta.yoast_wpseo_focuskw
        this.getPosts(transition)
        // this.getFeatured(transition)
      },
      (response) => {})
    },
    getPosts: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts').then((response) => {
        this.posts = response.data
        this.$root.global.loading = false
        this.show = true
        transition.next(transition)
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
