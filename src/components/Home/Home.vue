<template>
    <div class="landing--container flex align-center align-middle" v-if="show">
      <div class="row">
          <div class="col-xs-12 col-md-10 col-lg-10 bg landing--intro margin-auto text-center flex align-middle">
            <h1 v-if="data.title">{{ data.title.rendered }}</h1>
          </div>
          <div class="col-xs-12 bg landing--carousel flex align-middle" v-on:click="goToProject">
            <div class="carousel--item row text-left">
              <div class="item--left col-xs-6">
              
                  <img class="item--image" src="{{featuredRandom.custom_field.project_feature_image}}">
              </div>
              <div class="item--right col-xs-6 align-left align-center">
                <span>Utvalt case</span>
                <h2 v-if="featured">{{ featuredRandom.title.rendered }}</h2>
                <div class="project--arrow flex align-middle align-center">
                  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
                    <svg width="25px" height="25px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g id="Tjänster-&amp;-Projekt-Copy-6" transform="translate(-1261.000000, -3125.000000)" stroke="#FFFFFF" stroke-width="5.59999957">
                                <g id="Group-12" transform="translate(1264.000000, 3128.000000)">
                                    <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id="Path-36"></path>
                                    <polyline id="Path-37" points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline>
                                </g>
                            </g>
                        </g>
                    </svg>
                  </div>
              </div>
            </div>
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
      featured: [],
      featuredRandom: [],
      hidden: false
    }
  },
  head: {
    title: {
      inner: 'Dobus'
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/37').then((response) => {
        this.data = response.data
        this.getFeatured(transition)
      },
      (response) => {})
    },
    getFeatured: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages?filter[category_name]=featured').then((response) => {
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
  },
  ready: function () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
