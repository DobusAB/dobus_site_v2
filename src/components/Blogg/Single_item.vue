<template>
	<div class="row">
	  <div class="blog--wrapper col-xs-12 col-lg-4" v-bind:style="{background: post.custom_field.post_color }" v-for="post in item" v-link="{name: 'post_by_id', params: {id: post.id}}">
	    <div class="blog--image">
	       <div class="masked--image small">
	          <div class="masked--image_inner" v-bind:style="{'background-image': 'url(' + post.custom_field.post_image + ')' }"></div>
	       </div>
	    </div>
	    <div class="blog--content text-left">
	      <h4>{{post.title.rendered}}</h1>
	      <p>{{{post.excerpt.rendered}}}</p>
	       <!--  <div class="author--image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.author_image + ')' }"></div>-->
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
    item: []
  },
  ready: function () {
  }
}
</script>