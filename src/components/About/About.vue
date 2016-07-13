<template>
  <!-- <loading :show.sync="show"></loading> -->
   <div class="page--intro flex align-left align-middle" v-if="show">
      <h1>{{data.title.rendered}}</h1>
      <!--<p>{{{data.content.rendered}}}</p>-->
  </div>
   <div class="row about--container" v-if="show">
        <div class="about--contact text-left col-md-6 col-lg-6 col-xs-12 flex align-left align-center" v-for="sub in data.sub_pages" v-bind:style="{'background-image': 'url(' + sub.custom_fields.work_image + ')' }">
          <div class="contact--info">
            <h2>{{sub.custom_fields.work_title}}</h2>
            <h3><a href="">{{sub.custom_fields.work_phone}}</a></h3>
            <h3><a href="">{{sub.custom_fields.work_email}}</a></h3>
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
      msg: 'About',
      data: [],
      show: false
    }
  },
  components: {
    loading: Loading
  },
  router: {
    canReuse: true
  },
  ready: function () {
    this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/4').then((response) => {
      this.data = response.data
      this.show = true
    },
    (response) => {})
  }
}
</script>