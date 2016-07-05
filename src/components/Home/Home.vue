<template>
    <div class="landing--container flex align-center align-middle">
      <div class="row">
          <div class="col-lg-7 bg landing--intro text-left flex align-middle">
            <h1 v-if="data.title">{{ data.title.rendered }}</h1>
          </div>
          <div class="col-lg-5 bg landing--carousel flex align-middle">
            <div class="carousel--item text-left">
              <div class="item--left">
              <div class="item--image" style="background-image: url('http://beta.labb.dobus.se/wp-content/uploads/2016/06/tvmedluuk-featured.png');"></div>
              <div class="item--shadow"></div>
              </div>
              <span>Utvalt projekt</span>
              <h2>En podcast site med Kristian Luuk.</h2>
            </div>
          </div>
      </div>
    </div>
    <div class="footer">
      <div class="row">
        <h1>Nämen hej!</h1>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-3 text-left">
          <h2>Hitta oss</h2>
          <p>Kristian IV:s väg 3</p>
          <p>302 51, Halmstad</p>
          <p>Våning 2</p>
        </div>
        <div class="col-xs-12 col-md-3 text-left">
          <h2>Socialisera</h2>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">LinkedIn</a></p>
          <p><a href="#">Github</a></p>
        </div>
        <div class="col-xs-12 col-md-3 text-left">
          <h2>Våra tjänster</h2>
          <p><a v-link="{ name: 'project'}">Apputveckling</a></p>
          <p><a v-link="{ name: 'project'}">Digital design</a></p>
          <p><a v-link="{ name: 'project'}">Webbutveckling</a></p>
          <p><a v-link="{ name: 'project'}">Internet of Things</a></p>
          <p><a v-link="{ name: 'project'}">Startuphjälpen</a></p>
        </div>
        <div class="col-xs-12 col-md-3 text-left">
          <h2>Snacka med oss</h2>
          <p><a href="">Ekonomi</a></p>
          <p><a href="">Jobba här</a></p>
          <p><a href="">Nya projekt</a></p>
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
      data: []
    }
  },
  methods: {
    getPageData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/37').then((response) => {
        this.data = response.data
        console.log(response.data)
      },
      (response) => {})
    }
  },
  route: {
    activate: function (transition) {
      console.log('hook-example activated!')
      transition.next(transition)
    },
    canReuse: true
  },
  ready: function () {
    this.getPageData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
