<template>
	<h1>Projects</h1>
	<div v-for="item in project">
		<a v-link="{ name: 'project_by_name', params: { name: item.post_name }}">{{item.post_title}}</a>
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
    }
  },
  props: {
    project: []
  },
  ready: function () {
  }
}
</script>