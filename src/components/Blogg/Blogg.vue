<template>
  <div class="page--intro flex align-left align-middle" v-if="show">
       <h1 class="text--tilted">{{{data.title.rendered}}}</h1>
   </div>
   <div class="row">
    <div class="blog--wrapper col-xs-12 col-lg-4" v-bind:style="{background: post.custom_field.post_color }" v-for="post in items" v-link="{name: 'post_by_id', params: {id: post.id}}">
      <div class="blog--image">
         <div class="masked--image small">
            <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' + post.custom_field.post_image + ')' }"></div>
         </div>
      </div>
      <div class="blog--content text-left">
        <h4>{{post.title.rendered}}</h1>
        <p>{{{post.excerpt.rendered}}}</p>
         <!--  <div class="author--image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.author_image + ')' }"></div>-->
      </div>
    </div>
  </div>
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
    getBloggPage: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/573').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        this.getPosts()
        transition.next()
      },
      (response) => {})
    },
    getPosts: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts?filter[category_name]=blogg').then((response) => {
        this.items = response.data
        /* this.featured = response.data
        this.featuredRandom = this.featured[Math.floor(Math.random() * this.featured.length)]
        this.show = true
        this.$root.global.loading = false */
        // transition.next(transition)
      },
      (response) => {})
    }
  },
  route: {
    activate: function (transition) {
      this.getBloggPage(transition)
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
