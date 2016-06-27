<template>
	<div class="project-container" v-if="data.length > 0" transition="expand">
    <div class="project-inner">
		<h1>{{{data[0].title.rendered}}}</h1>
		{{{data[0].content.rendered}}}
    </div>
	</div>
	

</template>
<script>
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
  route: {
    data: function (transition) {
      this.$http.get('http://127.0.0.1/index.php/wp-json/wp/v2/pages?filter[name]=' + this.$route.params.name).then((response) => {
        this.data = response.data
      },
      (response) => {})
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