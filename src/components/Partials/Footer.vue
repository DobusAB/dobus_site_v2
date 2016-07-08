<template>
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

      <div class="row references--container">
        <img v-bind:src="logo.media_details.sizes.full.source_url" v-if="logo.media_details.sizes.full" v-for="logo in logos">
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
      msg: 'About',
      logos: []
    }
  },
  methods: {
    getLogos: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/media?parent=1').then((response) => {
        this.logos = response.data
      },
      (response) => {})
    }
  },
  ready: function () {
    this.getLogos()
  }
}

</script>