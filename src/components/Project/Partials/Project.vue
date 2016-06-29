<template>
	<div class="section--service flex flow-vertical"  v-for="item in project">
  <div class="section--service--header flex align-middle align-center">
        <h2>{{item.post_title}}</h2>
  </div>
  <div class="section--service--content row">
    <div class="section--service--project flex align-middle align-center full" v-for="sub in item.sub_pages">
        <a v-link="{ name: 'project_by_name', params: { name: sub.post_name }}">{{sub.post_title}}</a>
    </div>
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
    }
  },
  props: {
    project: []
  },
  ready: function () {
  }
}
</script>