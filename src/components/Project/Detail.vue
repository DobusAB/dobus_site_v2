<template>
	<div class="project-container" v-if="data.length > 0" transition="expand">
    <div class="project-inner">
      <div class="project--intro flex align-middle" v-bind:style="{'background-image': 'url(' + data[0].custom_fields.project_featured_image + ')' }">
        <h1>{{{data[0].title.rendered}}}</h1>
      </div>
      {{{data[0].content.rendered}}}
      <a v-link="{path: '/projects'}">Stäng</a>
      <a v-on:click="NextProject">Nästa project</a>
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
      this.getAllProjects()
    },
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