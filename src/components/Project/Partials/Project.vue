<template>
	<div class="section--service flex flow-vertical"  v-for="item in project">
    <div class="section--service--header flex text-left flow-vertical align-right">
          <h1>{{item.post_title}}</h1>
          {{{item.post_content}}}
    </div>
    <div class="section--service--content row">
      <div class="section--service--project flex align-middle align-center full"  v-link="{ name: 'project_by_name', params: { name: sub.post_name }}" v-bind:style="{background: sub.custom_fields.project_color }" v-for="sub in item.sub_pages">
        <div class="section--service--feature--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.project_featured_image + ')' }">
          
        </div>
        <img :src="sub.custom_fields.project_logo">
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