<template>
 <div class="footer" v-bind:class="{'fadeIn' : this.$root.global.loading}">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-3">
          <h4>Hitta oss</h4>
          <p>Köpmansgatan 41</p>
          <p>302 32, Halmstad</p>
          <p>Våning 2</p>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <h4>Socialisera</h4>
          <p><a href="https://www.facebook.com/dobuswebb/" target="_blank">Facebook</a></p>
          <p><a href="https://www.instagram.com/dobuswebb/" target="_blank"> Instagram </a></p>
          <p><a href="https://www.linkedin.com/company/dobus" target="_blank">LinkedIn</a></p>
          <p><a href="https://github.com/DobusAB" target="_blank">Github</a></p>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <h4>Våra tjänster</h4>
          <p><a v-link="{ name: 'project'}">Apputveckling</a></p>
          <p><a v-link="{ name: 'project'}">Digital design</a></p>
          <p><a v-link="{ name: 'project'}">Webbutveckling</a></p>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3">
          <h4>Kontakta oss</h4>
          <p><a href="mailto:info@dobus.se">info@dobus.se</a></p>
          <p><a href="tel:+46738308980">+46 73 830 89 80</a></p>
          <p><a v-link="{ name: 'work'}">Jobba här</a></p>
          <p><a href="https://cv.dobus.se" target="_blank">Personalkompetens</a></p>
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
    // this.getLogos()
  }
}

</script>