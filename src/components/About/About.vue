<template>
   <div class="page--intro flex align-left align-middle" v-if="show">
       <h1 class="text--tilted">{{{data.title.rendered}}}</h1>
   </div>

  <div class="about--row row">
    <div class="col-xs-12 about--wrapper flex flow-vertical margin-auto text-center align-middle align-center" v-for="sub in data.sub_pages" v-bind:style="{background: sub.custom_fields.work_color }">
      <h3 class="text--tilted">{{sub.custom_fields.work_title}}</h3>
      <h2 class="text--tilted">{{sub.post_title}}</h2>
      <a href="tel:{{sub.custom_fields.work_phone}}"><h4 class="text--tilted">{{sub.custom_fields.work_phone}}</h4></a>
      <a href="mailto:{{sub.custom_fields.work_email}}"><h4 class="text--tilted">{{sub.custom_fields.work_email}}</h4></a>
      <div class="masked--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.work_image + ')' }"></div>
     </div>
  </div>
    <div class="row image--background" v-link="{ name: 'work'}" v-bind:style="{'background-image': 'url(' + data.custom_field.work_image + ')' }"> 
    <div class="image--overlay"></div>
    <div class="col-xs-12 site--section landing--about flex flow-vertical margin-auto text-center align-middle align-center">
      <h3 class="text--tilted">Vill du vara med?</h2>
      <h2 class="text--tilted">Kolla in våra lediga jobb.</h2>
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
  methods: {
    getAboutPage: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/4').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        transition.next()
      },
      (response) => {})
    }
  },
  head: {
    title: {
      inner: 'Kontakta oss'
    }
  },
  components: {
    loading: Loading
  },
  route: {
    data: function (transition) {
      // this.getProject()
      // this.getProject(transition)
      // transition.next()
    },
    activate: function (transition) {
      this.getAboutPage(transition)
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