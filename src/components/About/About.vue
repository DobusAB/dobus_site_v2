<template>
   <div class="page--intro flex align-left align-middle" v-if="show">
      <h1>{{data.title.rendered}}</h1>
      <!--<p>{{{data.content.rendered}}}</p>-->
  </div>
   <div class="row about--container" v-if="show">
        <div class="about--contact text-left col-xs-12 flex align-left align-center" v-for="sub in data.sub_pages" v-bind:style="{'background-image': 'url(' + sub.custom_fields.work_image + ')' }">
          <div class="contact--info">
            <h2>{{sub.custom_fields.work_title}}</h2>
            <p>{{sub.custom_fields.work_description}}</p>
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