<template>
  <div class="landing--container flex align-center align-middle" v-if="!show"><h3 style="color:#000;">Loading data ... </h3></div>
    <div class="landing--container flex align-center align-middle" v-if="show" v-bind:style="{background: featuredRandom.custom_field.project_color}">
      <div class="row">
          <div class="col-lg-7 bg landing--intro text-left flex align-middle">
            <h1 v-if="data.title">{{ data.title.rendered }}</h1>
          </div>
          <div class="col-lg-5 bg landing--carousel flex align-middle">
            <div class="carousel--item row text-left">
              <div class="item--left col-xs-5 col-md-12">
                <div class="item--image" v-bind:style="{'background-image': 'url(' + featuredRandom.custom_field.project_featured_image + ')' }"></div>
                <div class="item--shadow"></div>
              </div>
              <div class="item--right col-xs-7 col-md-12 align-middle align-center">
                <span>Utvalt projekt</span>
                <h2 v-if="featured">{{ featuredRandom.title.rendered }}</h2>
              </div>
            </div>
          </div>
      </div>
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
      msg: 'Hello World',
      show: false,
      data: [],
      featured: [],
      featuredRandom: []
    }
  },
  methods: {
    getPageData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/37').then((response) => {
        this.data = response.data
        this.getFeatured()
      },
      (response) => {})
    },
    getFeatured: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages?filter[category_name]=featured').then((response) => {
        this.featured = response.data
        this.featuredRandom = this.featured[Math.floor(Math.random() * this.featured.length)]
        this.show = true
      },
      (response) => {})
    }
  },
  route: {
    data: function (transition) {
      this.getPageData()
    },
    canReuse: true
  },
  ready: function () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
