<template>
	<div id="projecttop" class="project-container" v-if="data.length > 0" transition="expand" v-bind:style="{background: data[0].custom_field.project_color}">
      <div class="col-xs-12 intro--wrapper flex flow-vertical margin-auto text-center align-middle align-center">
        <h3 class="text--tilted">Kristian Luuk</h3>
        <h2 class="text--tilted">{{data[0].title.rendered}}</h2>
        <div class="masked--image large" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}" v-bind:style="{'background-image': 'url(' + data[0].custom_field.project_featured_image + ')' }"></div>
      </div>
      <div class="detail--wrapper">
      <!--<div class="description--top"></div>
         <div class="col-xs-12 col-sm-12 align-center align-middle"> 
           <h2 class="project--description">{{{data[0].custom_field.project_intro}}}</h2>
         </div>
      </div>-->
      
      <div class="detail--section  row" v-if="data[0].custom_field.project_solution_title || data[0].custom_field.project_solution_description" >
        <div class="col-xs-12 text-center detail--image"> 
          <img class="margin-auto" v-bind:src="data[0].custom_field.project_solution_image">
        </div>
        <div class="col-xs-12 text-center detail--info flex flow-vertical align-center"> 
          <h3>{{{data[0].custom_field.project_solution_title}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description}}}</p>
        </div>
      </div>

      <div class="detail--section  row" v-if="data[0].custom_field.project_solution_title_2 || data[0].custom_field.project_solution_description_2" >
        <div class="col-xs-12 text-center detail--image"> 
          <img class="margin-auto" v-bind:src="data[0].custom_field.project_solution_image_2">
        </div>
        <div class="col-xs-12 text-center detail--info flex flow-vertical align-center"> 
          <h3>{{{data[0].custom_field.project_solution_title_2}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description_2}}}</p>
        </div>
      </div>

       <div class="detail--section row" v-if="data[0].custom_field.project_solution_title_3 || data[0].custom_field.project_solution_description"_3>
        <div class="col-xs-12 text-center detail--image"> 
          <img class="margin-auto" v-bind:src="data[0].custom_field.project_solution_image_3">
        </div>
        <div class="col-xs-12 text-center detail--info flex flow-vertical align-center"> 
          <h3>{{{data[0].custom_field.project_solution_title_3}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description_3}}}</p>
        </div>
      </div>

      <div class="detail--section detail--results row" v-if="data[0].custom_field.project_results">
        <div class="flex align-left align-middle">
            <h1 class="text--tilted">{{{data[0].custom_field.project_results}}}</h1>
        </div>
      </div>
<!--
      <div class="project--section row" v-if="data[0].custom_field.project_testimony || data[0].custom_field.project_testimony_image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.project_testimony_image + ')' }">
          <div class="col-xs-12 col-sm-12 text-center project--testimony flex flow-vertical align-center"> 
            <h1>{{{data[0].custom_field.project_testimony}}}</h1>
          </div>
        </div>

      </div>-->

      <div class="row next--project " v-on:click="NextProject(nextProject.post_name)" v-bind:style="{background: nextProject.custom_fields.project_color}" v-if="nextProject.post_title">
      <div class="col-xs-12 project--wrapper flex flow-vertical margin-auto text-center align-middle align-center">
        <h3 class="text--tilted">Nästa projekt</h3>
        <h2 class="text--tilted">{{{nextProject.post_title}}} {{nextProject.name}}</h2>
        <div class="masked--image" v-bind:style="{'background-image': 'url(' + nextProject.custom_fields.project_featured_image + ')' }"></div>
      </div>
    </div>

      <!--<div class="next--project row" v-on:click="NextProject(nextProject.post_name)" v-bind:style="{background: nextProject.custom_fields.project_color}" v-if="nextProject.post_title">
        <div class="col-xs-12 text-center">
          <div class="project--intro">
           <h1>{{{nextProject.post_title}}} {{nextProject.name}}</h1>
           <h4>{{{nextProject.custom_fields.project_description}}}</h4>
          </div>
          <div class="project--image_container" v-bind:style="{'background-image': 'url(' + nextProject.custom_fields.project_featured_image + ')' }"></div>
           <div class="project--shadow"></div>
           <div class="project--arrow flex align-middle align-center">
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
        </div>
        </div>
      </div>-->

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
      currentProjectIndex: 0,
      body: document.getElementsByTagName('body')[0]
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
      this.body.className = ''
      transition.next(transition)
    }
  },
  ready: function () {
    this.$root.global.projectOpen = true
    this.body.classList.add('project-open')
  }
}
</script>