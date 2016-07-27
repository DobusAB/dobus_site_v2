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
       <div class="author--wrapper flow--horizontal flex">
       <!--  <div class="author--image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.author_image + ')' }"></div>-->
        <div class="author--info">
         <!-- <h5>{{{data[0].custom_field.author_title}}}</h5> -->
         <!-- <h4>{{{data[0].custom_field.author_name}}}</h4> -->
        </div>
      </div>
    </div>
  </div>
</div>
<router-view></router-view>
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
        this.getFeatured(transition)
      },
      (response) => {})
    },
    getFeatured: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts').then((response) => {
        this.$root.global.loading = false
        // this.featuredRandom = this.featured[Math.floor(Math.random() * this.featured.length)]
        this.show = true
        this.items = response.data
        transition.next(transition)
      },
      (response) => {})
    },
    goToProject: function () {
      console.log(this.featuredRandom)
      this.$router.go({name: 'project_by_name', params: {name: this.featuredRandom.slug}})
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
