<template>
   <div class="page--intro flex align-left align-middle" v-if="data.title">
      <h1>{{data.title.rendered}}</h1>
      <!--<p>{{{data.content.rendered}}}</p>-->
  </div>
   <div class="row about--container">
        <div class="about--contact text-left col-md-6 col-lg-4 col-xs-12 flex align-middle align-center" >
          <div class="contact--info">
            <h2>Ekonomi</h2>
            <h3><a href="">+46 730 93 65 15</a></h3>
            <h3><a href="">albin@dobus.se</a></h3>
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
      msg: 'About',
      data: []
    }
  },
  router: {
    canReuse: true
  },
  ready: function () {
    this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/4').then((response) => {
      this.data = response.data
      console.log(response.data)
    },
    (response) => {})
  }
}
</script>