<template>
	<div class="service--section flex flow-vertical"  v-bind:style="{background: item.custom_fields.project_color }"  v-for="item in project">
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
      <div class="col-xs-12 col-lg-6 project--wrapper flex flow-vertical text-center align-middle align-center" v-link="{ name: 'project_by_name', params: { name: sub.post_name }}" v-for="sub in item.sub_pages">
        <h3 class="text--tilted">{{{sub.custom_fields.client_name}}}</h3>
        <h2 class="text--tilted">{{sub.post_title}}</h2>
        <div class="masked--image">
          <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' + sub.custom_fields.project_featured_image + ')' }"></div>
        </div>
        <a href="#" class="read--more" style="padding: 0.5em 1em; background-color: #B076B9; opacity: 1; font-size: 1.3em; font-weight: 800; text-transform: uppercase; z-index: 999; border-radius: 100em; display: flex; color: white; justify-content: center; align-items: center; -webkit-box-shadow: 0px 0px 25px 0px rgba(89,89,89,1);
-moz-box-shadow: 0px 0px 25px 0px rgba(89,89,89,1);
box-shadow: 0px 0px 25px 0px rgba(89,89,89,1);">
          läs mer
        </a>
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