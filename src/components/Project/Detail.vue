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
    }
  },
  route: {
    data: function (transition) {
      this.getDetailData()
    },
    deactivate: function (transition) {
      transition.next(transition)
    }
    /* activate: function (transition) {
      transition.next(transition)
    } */
  },
  ready: function () {
    /* this.$http.get('http://127.0.0.1/index.php/wp-json/wp/v2/pages?filter[name]=' + this.$route.params.name).then((response) => {
      this.data = response.data
    },
    (response) => {}) */
  }
}
</script>