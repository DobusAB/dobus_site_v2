<template>
	<div class="service--section flex flow-vertical" v-bind:class="{'fadeIn' : this.$root.global.loading}" v-bind:style="{background: item.custom_fields.project_color }"  v-for="item in project">
    <div class="service--header row flex text-left">
          <div class="col-xs-12 col-md-12 col-lg-7 service--text">
            <h1>{{item.post_title}}</h1>
            {{{item.post_content}}}
          </div>
          <div class="col-lg-5 service--text flex align-middle align-center">
            {{{item.custom_fields.service_illustration}}}
          </div>
    </div>
    <div class="service--top"></div>
    <div class="service--content row">
      <div class="service--project flex flow-vertical col-xs-12 align-middle align-center" v-link="{ name: 'project_by_name', params: { name: sub.post_name }}" v-for="sub in item.sub_pages">
        <div class="project--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.project_featured_image + ')' }">
        </div>
        <div class="project--shadow"></div>
        <div class="project--intro">
          <img src="{{{sub.custom_fields.project_thumbnail_logo}}}">
          <h1>{{{sub.post_title}}}</h1>
          <h4>{{{sub.custom_fields.project_description}}}</h4>
         <!-- <hr class="dobus--border">-->
          
        </div>
        <div class="project--arrow flex align-middle align-center">
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
          <svg width="20px" height="20px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="Tjänster-&amp;-Projekt-Copy-6" transform="translate(-1261.000000, -3125.000000)" stroke="#FFFFFF" stroke-width="5.59999957">
                      <g id="Group-12" transform="translate(1264.000000, 3128.000000)">
                          <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id="Path-36"></path>
                          <polyline id="Path-37" points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline>
                      </g>
                  </g>
              </g>
          </svg>
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