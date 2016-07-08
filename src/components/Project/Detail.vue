<template>
	<div class="project-container" v-if="data.length > 0" transition="expand">
    <div class="project-inner">
      <div class="project--image flex flow-vertical align-center align-middle" v-bind:style="{background: data[0].custom_field.project_color}">
        <div class="project--image_container" v-bind:style="{'background-image': 'url(' + data[0].custom_field.project_featured_image + ')' }"></div>
        <div class="project--shadow"></div>
         <svg width="156px" height="55px" class="section--overlap" viewBox="642 851 156 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <path d="M643,851 L648.00008,851 C656.836548,851 666.412122,857.750953 669.945053,865.850118 C669.945053,865.850118 680.275311,905.609375 717.99992,905.609375 C755.724529,905.609375 766.063401,865.8321 766.063401,865.8321 C769.34205,857.640558 779.16817,851 787.99976,851 L797.49984,851 L643,851 L643,851 Z" id="Combined-Shape" stroke="none" fill='{{data[0].custom_field.project_color }}' fill-rule="evenodd"></path>
          </svg>
      </div>
      <div class="project--section">
        <!--<span class="intro--finger">
        <svg width="50px" height="154px" viewBox="667 797 89 204" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs></defs>
            <g id="Finger" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(720.000000, 916.500000) rotate(-270.000000) translate(-720.000000, -916.500000) translate(635.500000, 891.500000)">
                <g transform="translate(84.500000, 25.000000) rotate(-270.000000) translate(-84.500000, -25.000000) translate(59.500000, -59.500000)">
                    <path d="M49.21875,169 L49.21875,24.61521 C49.21875,11.0167866 38.2007575,1.13686838e-13 24.609375,1.13686838e-13 C11.0150041,1.13686838e-13 -1.22103809e-13,11.0206049 -1.22103809e-13,24.61521 L-1.22103809e-13,169 L49.21875,169 Z" id="Combined-Shape" fill="#FFC100"></path>
                    <path d="M41.6466346,28.630149 C41.6466346,19.1851356 34.0187937,11.4545455 24.609375,11.4545455 C15.2191026,11.4545455 7.57211538,19.1443251 7.57211538,28.630149 L7.57211538,38.1818182 C7.57211538,38.1818182 11.7929785,43.8355111 24.609375,43.8355111 C37.4257715,43.8355111 41.6466346,38.1818182 41.6466346,38.1818182 L41.6466346,28.630149 Z" id="Nail" fill-opacity="0.114781476" fill="#000000"></path>
                    <g id="Lines" transform="translate(7.000000, 76.000000)" fill="#000000" fill-opacity="0.0771059783">
                        <rect id="Rectangle-15" x="0.572115385" y="0.363636364" width="34.0745192" height="3.81818182" rx="1.90909091"></rect>
                        <rect id="Rectangle-15-Copy" x="8.14423077" y="8" width="22.7163462" height="3.81818182" rx="1.90909091"></rect>
                    </g>
                </g>
            </g>
        </svg>
        </span>-->
        <h1>{{{data[0].title.rendered}}}</h1>
        <h4>{{{data[0].custom_field.project_description}}}</h4>
        <h2>{{{data[0].custom_field.project_intro}}}</h2>
      </div>
      <div class="project--section colored row">
        <div class="col-xs-12 col-md-6 text-left flex flow-vertical align-center align-middle"> 
          <h1>{{{data[0].custom_field.project_solution_title}}}</h1>
          <p>{{{data[0].custom_field.project_solution_description}}}</p>
        </div>
        <div class="col-xs-12 col-md-6 case--image flex align-middle align-center">
          <img v-bind:src="data[0].custom_field.project_solution_image">
        </div>
         <svg width="156px" height="55px" class="section--overlap" viewBox="642 851 156 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <path d="M643,851 L648.00008,851 C656.836548,851 666.412122,857.750953 669.945053,865.850118 C669.945053,865.850118 680.275311,905.609375 717.99992,905.609375 C755.724529,905.609375 766.063401,865.8321 766.063401,865.8321 C769.34205,857.640558 779.16817,851 787.99976,851 L797.49984,851 L643,851 L643,851 Z" id="Combined-Shape" stroke="none" fill='' fill-rule="evenodd"></path>
        </svg>
      </div>

      <div class="next--project row" v-bind:style="{background: data[0].custom_field.project_color}">
        <div class="col-xs-12 col-md-6">
          <div class="project--image_container" v-bind:style="{'background-image': 'url(' + data[0].custom_field.project_featured_image + ')' }"></div>
           <div class="project--shadow"></div>
        </div>
        <div class="col-xs-12 col-md-6 flex align-center flow-vertical">
           <h1>{{{data[0].title.rendered}}}</h1>
           <h4>{{{data[0].custom_field.project_description}}}</h4>
            <button v-on:click="NextProject" class="primary--button">Se nästa projekt</button>
        </div>

      </div>
    </div>
	</div>
	<router-view></router-view>
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
      data: [],
      moreProjects: [],
      currentProjectIndex: 0
    }
  },
  props: {
    project: []
  },
  methods: {
    getDetailData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages?filter[name]=' + this.$route.params.name).then((response) => {
        this.data = response.data
      },
      (response) => {})
    },
    getAllProjects: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/2').then((response) => {
        for (var i = 0; i < response.data.sub_pages.length; i++) {
          for (var x = 0; x < response.data.sub_pages[i].sub_pages.length; x++) {
            this.moreProjects.push(response.data.sub_pages[i].sub_pages[x])
          }
        }
        console.log(this.moreProjects)
      },
      (response) => {})
    },
    NextProject: function () {
      var projectLength = this.moreProjects.length
      for (var i = 0; i < projectLength; i++) {
        if (this.data[0].id === this.moreProjects[i].ID) {
          this.currentProjectIndex = i
        }
      }
      if (this.currentProjectIndex === (projectLength - 1)) {
        this.currentProjectIndex = 0
        this.data = this.moreProjects[this.currentProjectIndex]
      }
      console.log(this.data)
    }
  },
  route: {
    data: function (transition) {
      this.getDetailData()
      // this.getAllProjects()
    },
    /* activate: function (transition) {
      // transition.next(transition)
    }, */
    deactivate: function (transition) {
      this.$root.global.projectOpen = false
      transition.next(transition)
    }
    /* activate: function (transition) {
      transition.next(transition)
    } */
  },
  ready: function () {
    this.$root.global.projectOpen = true
  }
}
</script>