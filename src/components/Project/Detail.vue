<template>
	<div id="projecttop" class="project-container" v-if="data.length > 0" transition="expand">
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
      <div class="project--section project--intro">
        <h1>{{{data[0].title.rendered}}}</h1>
        <h4>{{{data[0].custom_field.project_description}}}</h4>
        <h2>{{{data[0].custom_field.project_intro}}}</h2>
      </div>
      <div class="project--section colored row">
        <div class="col-xs-12 col-md-6 text-left flex flow-vertical align-center"> 
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

       <div class="project--section row">
        <div class="col-xs-12 col-md-6 text-left flex flow-vertical align-center"> 
          <h1>{{{data[0].custom_field.project_solution_title_2}}}</h1>
          <p>{{{data[0].custom_field.project_solution_description_2}}}</p>
        </div>
        <div class="col-xs-12 col-md-6 case--image flex align-middle align-center">
          <img v-bind:src="data[0].custom_field.project_solution_image_2">
        </div>
      </div>

      <div class="project--section colored row">
        <div class="col-xs-12 col-md-6 text-left flex flow-vertical align-center"> 
          <h1>{{{data[0].custom_field.project_solution_title_3}}}</h1>
          <p>{{{data[0].custom_field.project_solution_description_3}}}</p>
        </div>
        <div class="col-xs-12 col-md-6 case--image flex align-middle align-center">
          <img v-bind:src="data[0].custom_field.project_solution_image_3">
        </div>
         <svg width="156px" height="55px" class="section--overlap" viewBox="642 851 156 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <path d="M643,851 L648.00008,851 C656.836548,851 666.412122,857.750953 669.945053,865.850118 C669.945053,865.850118 680.275311,905.609375 717.99992,905.609375 C755.724529,905.609375 766.063401,865.8321 766.063401,865.8321 C769.34205,857.640558 779.16817,851 787.99976,851 L797.49984,851 L643,851 L643,851 Z" id="Combined-Shape" stroke="none" fill='' fill-rule="evenodd"></path>
        </svg>
      </div>

      <div class="project--section colored row">
         <div class="col-xs-12 col-md-12 align-center align-middle"> 
           <h2 class="project--results">{{{data[0].custom_field.project_results}}}</h2>
         </div>
         <svg width="156px" height="55px" class="section--overlap" viewBox="642 851 156 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <path d="M643,851 L648.00008,851 C656.836548,851 666.412122,857.750953 669.945053,865.850118 C669.945053,865.850118 680.275311,905.609375 717.99992,905.609375 C755.724529,905.609375 766.063401,865.8321 766.063401,865.8321 C769.34205,857.640558 779.16817,851 787.99976,851 L797.49984,851 L643,851 L643,851 Z" id="Combined-Shape" stroke="none" fill='' fill-rule="evenodd"></path>
        </svg>
      </div>

      <div class="next--project row" v-bind:style="{background: nextProject.custom_fields.project_color}" v-if="nextProject.post_title">
        <div class="col-xs-12 col-md-6">
          <div class="project--image_container" v-bind:style="{'background-image': 'url(' + nextProject.custom_fields.project_featured_image + ')' }"></div>
           <div class="project--shadow"></div>
        </div>
        <div class="col-xs-12 col-md-6 flex align-center flow-vertical">
           <span>Nästa projekt</span>
           <h1>{{{nextProject.post_title}}} {{nextProject.name}}</h1>
           <h4>{{{nextProject.custom_fields.project_description}}}</h4>
            <button v-on:click="NextProject(nextProject.post_name)" class="primary--button">Se nästa projekt</button>
        </div>
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
      data: [],
      nextProject: [],
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
        var scrollObject = document.getElementById('projecttop')
        if (scrollObject) {
          scrollObject.scrollTop = 0
        }
      },
      (response) => {})
    },
    getAllProjects: function () {
      var moreProjects = []
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages/2').then((response) => {
        for (var i = 0; i < response.data.sub_pages.length; i++) {
          for (var x = 0; x < response.data.sub_pages[i].sub_pages.length; x++) {
            moreProjects.push(response.data.sub_pages[i].sub_pages[x])
          }
        }
        var projectLength = moreProjects.length
        for (var y = 0; y < projectLength; y++) {
          if (this.data[0].id === moreProjects[y].ID) {
            this.currentProjectIndex = y
          }
        }
        if (this.currentProjectIndex === (projectLength - 1)) {
          this.currentProjectIndex = 0
        } else {
          this.currentProjectIndex += 1
        }
        this.nextProject = moreProjects[this.currentProjectIndex]
        console.log(this.nextProject)
      },
      (response) => {})
    },
    NextProject: function (name) {
      this.$router.go({name: 'project_by_name', params: { name: name }})
    }
  },
  route: {
    data: function (transition) {
      this.getDetailData()
      this.getAllProjects()
    },
    deactivate: function (transition) {
      this.$root.global.projectOpen = false
      transition.next(transition)
    }
  },
  ready: function () {
    this.$root.global.projectOpen = true
  }
}
</script>