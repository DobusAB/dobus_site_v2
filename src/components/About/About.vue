<template>
   <div class="page--intro flex align-left align-middle" v-if="show">
      <h1 v-bind:class="{'fadeIn' : this.$root.global.loading}">{{data.title.rendered}}</h1>
  </div>

      <div class="about--container" v-bind:class="{'fadeIn' : this.$root.global.loading}" v-if="show">
      <div class="row about--employee" v-for="sub in data.sub_pages" v-bind:style="{background: sub.custom_fields.work_color }">
          <div class="col-xs-12 col-md-8 text-left about--description">
            <h1>{{sub.post_title}}</h1>
             <h2>{{sub.custom_fields.work_title}}</h2>
            <!-- <p>{{sub.custom_fields.work_description}}</p>-->
            <a href="tel:{{sub.custom_fields.work_phone}}">{{sub.custom_fields.work_phone}}
              <span><?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
                </span>
            </a>
            <a href="mailto:{{sub.custom_fields.work_email}}?Subject=Hej!" target="_top">{{sub.custom_fields.work_email}}
               <span>
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
                </span>
            </a>
          </div>
           <img v-bind:src="sub.custom_fields.work_image"/>
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