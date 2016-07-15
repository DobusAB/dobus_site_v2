<template>
     <div class="page--intro flex align-left align-middle" v-if="show">
        <h1>{{data.title.rendered}}</h1>
    </div>
    <div class="positions--container">
      <div class="row work--position" v-for="sub in data.sub_pages">
        <div class="col-xs-12 col-md-12 work--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.position_image + ')' }">
          <div class="col-xs-12 col-md-8 text-center margin-auto work--description">
            <h1>{{sub.post_title}}</h1>
            <span>Sista ansökning: 25/7</span>
            <p>{{{sub.custom_fields.position_description }}}</p>
            <a href="">Ansök via LinkedIn 
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
            <a href="">Ansök via Mail
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
          <div class="work--overlay"></div>
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
      data: [],
      show: false
    }
  },
  head: {
    title: {
      inner: 'Jobba här'
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPageData: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/41').then((response) => {
        this.data = response.data
        this.show = true
        this.$root.global.loading = false
        // console.log(response.data)
        transition.next()
      },
      (response) => {})
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
    // this.getPageData()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
