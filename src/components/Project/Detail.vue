<template>
	<div class="project-container" v-if="data.length > 0" transition="expand" v-bind:style="{'background':data[0].custom_field.project_color}">
    <div class="project-inner">
		<h1>{{{data[0].title.rendered}}}</h1>
    {{{data[0].content.rendered}}}
    <a href="" v-link="{path: '/projects'}">Stäng</a>
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
      data: []
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
        // console.log(response.data.sub_pages.length)
        for (var i = 0; i < response.data.sub_pages.length; i++) {
          console.log(i)
        }
      },
      (response) => {})
    }
  },
  route: {
    data: function (transition) {
      this.getDetailData()
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
    this.getAllProjects()
  }
}
</script>