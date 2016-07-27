<template>
	<div id="projecttop" class="project-container" v-if="data.length > 0" transition="expand" v-bind:style="{background: data[0].custom_field.project_color}">
      <div class="col-xs-12 intro--wrapper flex flow-vertical margin-auto text-center align-middle align-center">
        <h3 class="text--tilted">{{{data[0].custom_field.client_name}}}</h3>
        <h2 class="text--tilted">{{data[0].title.rendered}}</h2>
        <div class="masked--image large" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}" v-bind:style="{'background-image': 'url(' + data[0].custom_field.project_featured_image + ')' }"></div>
      </div>
      <div class="detail--wrapper">
      <!--<div class="description--top"></div>
         <div class="col-xs-12 col-sm-12 align-center align-middle"> 
           <h2 class="project--description">{{{data[0].custom_field.project_intro}}}</h2>
         </div>
      </div>-->

      <div class="detail--section row detail--intro">
        <div class="col-xs-12 text-left flex flow-vertical align-center"> 
          {{{data[0].content.rendered}}}
          <div class="author--wrapper flow--horizontal flex">
            <div class="author--image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.author_image + ')' }"></div>
            <div class="author--info">
              <h5>{{{data[0].custom_field.author_title}}}</h5>
              <h4>{{{data[0].custom_field.author_name}}}</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div class="detail--section  row" v-if="data[0].custom_field.project_solution_title || data[0].custom_field.project_solution_description" >
        <div class="col-xs-12 col-md-6 text-center detail--image"> 
          <img v-bind:src="data[0].custom_field.project_solution_image">
        </div>
        <div class="col-xs-12 col-md-6 text-left detail--info flex flow-vertical"> 
          <h3>{{{data[0].custom_field.project_solution_title}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description}}}</p>
        </div>
      </div>

      <div class="detail--section  row" v-if="data[0].custom_field.project_solution_title_2 || data[0].custom_field.project_solution_description_2" >
        <div class="col-xs-12 col-md-6 detail--image"> 
          <img v-bind:src="data[0].custom_field.project_solution_image_2">
        </div>
        <div class="col-xs-12 col-md-6 text-left detail--info flex flow-vertical"> 
          <h3>{{{data[0].custom_field.project_solution_title_2}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description_2}}}</p>
        </div>
      </div>

      <div class="detail--section row" v-if="data[0].custom_field.project_solution_title_3 || data[0].custom_field.project_solution_description_3" >
        <div class="col-xs-12 col-md-6 detail--image"> 
          <img v-bind:src="data[0].custom_field.project_solution_image_3">
        </div>
        <div class="col-xs-12 col-md-6 text-left detail--info flex flow-vertical"> 
          <h3>{{{data[0].custom_field.project_solution_title_3}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description_3}}}</p>
        </div>
      </div>

      <div class="detail--section row" v-if="data[0].custom_field.project_solution_title_4 || data[0].custom_field.project_solution_description_4" >
        <div class="col-xs-12 col-md-6 detail--image"> 
          <img v-bind:src="data[0].custom_field.project_solution_image_4">
        </div>
        <div class="col-xs-12 col-md-6 text-left detail--info flex flow-vertical"> 
          <h3>{{{data[0].custom_field.project_solution_title_4}}}</h3>
          <p>{{{data[0].custom_field.project_solution_description_4}}}</p>
        </div>
      </div>
      <div class="detail--section detail--results row" v-if="data[0].custom_field.project_results">
        <div class="flex align-left align-middle">
            <h1 class="text--tilted">{{{data[0].custom_field.project_results}}}</h1>
        </div>
      </div>
      <div class="row next--project " v-on:click="NextProject(nextProject.post_name)" v-bind:style="{background: nextProject.custom_fields.project_color}" v-if="nextProject.post_title">
      <div class="col-xs-12 project--wrapper flex flow-vertical margin-auto text-center align-middle align-center">
        <h3 class="text--tilted">Nästa projekt</h3>
        <h2 class="text--tilted">{{{nextProject.post_title}}} {{nextProject.name}}</h2>
        <div class="masked--image">
          <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' + nextProject.custom_fields.project_featured_image + ')' }"></div>
        </div>
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
      currentProjectIndex: 0,
      body: document.getElementsByTagName('body')[0],
      yoast: {
        description: '',
        title: '',
        keywords: ''
      }
    }
  },
  props: {
    project: []
  },
  methods: {
    getDetailData: function () {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/pages?filter[name]=' + this.$route.params.name).then((response) => {
        this.data = response.data
        this.yoast.description = response.data[0].yoast_meta.yoast_wpseo_metadesc
        this.yoast.title = response.data[0].yoast_meta.yoast_wpseo_title
        this.yoast.keywords = response.data[0].yoast_meta.yoast_wpseo_focuskw
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