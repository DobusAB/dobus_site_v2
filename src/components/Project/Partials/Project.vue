<template>
	<div class="service--section flex flow-vertical" v-bind:class="{'fadeIn' : this.$root.global.loading}" v-bind:style="{background: item.custom_fields.project_color }"  v-for="item in project">
    <div class="service--header row flex">
      <div class="col-xs-12 text-center">
        <h3 class="text--tilted">Vad vi gör</h3>
        <h1 class="text--tilted">{{item.post_title}}</h1>
      </div>
      <div class="service--illustration flex align-middle align-center">
        {{{item.custom_fields.service_illustration}}}
      </div>
    </div>
    <div class="row project--row">
      <div class="col-xs-12 project--wrapper flex flow-vertical margin-auto text-center align-middle align-center" v-link="{ name: 'project_by_name', params: { name: sub.post_name }}" v-for="sub in item.sub_pages">
        <h3 class="text--tilted">{{{sub.custom_fields.client_name}}}</h3>
        <h2 class="text--tilted">{{sub.post_title}}</h2>
        <div class="masked--image">
          <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' + sub.custom_fields.project_featured_image + ')' }"></div>
        </div>
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