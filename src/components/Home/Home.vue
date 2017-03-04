<template>
<div class="landing--container" v-if="show">
  <div class="row">
    <div class="col-xs-12 landing--intro margin-auto text-center flex align-middle">
      <h1 class="text--tilted" v-bind:class="{'fadeIn' : this.$root.global.loading}">{{{ data.title.rendered }}}</h1>
    </div>
  </div>
  <div class="row" v-bind:style="{background: featuredRandom.custom_field.project_color}">
    <div class="col-xs-12 site--section landing--project flex flow-vertical margin-auto text-center align-middle align-center" v-link="{ name: 'project_by_name', params: { name: featuredRandom.slug }}">
      <h3 class="text--tilted" v-bind:class="{'fadeIn' : this.$root.global.loading}">utvalt projekt</h2>
      <h2 class="text--tilted" v-bind:class="{'fadeIn' : this.$root.global.loading}">{{ featuredRandom.title.rendered}}</h2>
      <div class="masked--image">
        <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' +  featuredRandom.custom_field.project_featured_image + ')' }"></div>
      </div>
    </div>
  </div>

  <div class="row image--background" v-link="{ name: 'about'}"> 
    <div class="image--overlay"></div>
    <div class="image--inner" v-bind:style="{'background-image': 'url(' + data.custom_field.group_image + ')' }"></div>
    <div class="col-xs-12 site--section landing--about flex flow-vertical margin-auto text-center align-middle align-center">
      <h3 class="text--tilted">vårt fantastiska team</h2>
      <h2 class="text--tilted">all kompetens under samma tak.</h2>
    </div>
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
    loading: Loading
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'wp-json/wp/v2/pages/37').then((response) => {
        this.data = response.data
        this.getFeatured(transition)
      },
      (response) => {})
    },
    getFeatured: function (transition) {
      this.$http.get(Init.globalUrl() + 'wp-json/wp/v2/pages?filter[category_name]=featured').then((response) => {
        this.featured = response.data
        this.featuredRandom = this.featured[Math.floor(Math.random() * this.featured.length)]
        this.show = true
        this.$root.global.loading = false
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
